<?php

namespace App\Repositories;

use App\Models\Language;
use App\Models\UserProgress;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class LearningProgressRepository
{
    /**
     * @return Collection<int, Language>
     */
    public function languagesWithThemesAndWords(): Collection
    {
        return Language::with(['themes.words'])->orderBy('id')->get();
    }

    /**
     * @return Collection<string, UserProgress>
     */
    public function progressByLanguageThemeLevel(int $userId): Collection
    {
        return UserProgress::where('user_id', $userId)
            ->get()
            ->keyBy(fn (UserProgress $progress) => $this->compoundKey(
                $progress->language_id,
                $progress->theme_key,
                $progress->level,
            ));
    }

    /**
     * @return Collection<string, \stdClass>
     */
    public function reviewsByLanguageThemeLevel(int $userId): Collection
    {
        return DB::table('word_reviews')
            ->join('words', 'words.id', '=', 'word_reviews.word_id')
            ->join('themes', 'themes.id', '=', 'words.theme_id')
            ->where('word_reviews.user_id', $userId)
            ->groupBy('word_reviews.language_code', 'themes.key', 'words.level')
            ->select([
                'word_reviews.language_code',
                'themes.key as theme_key',
                'words.level',
                DB::raw('COUNT(*) as srs_total'),
                DB::raw('SUM(CASE WHEN word_reviews.next_review_at <= ? THEN 1 ELSE 0 END) as srs_due'),
            ])
            ->addBinding(Carbon::now(), 'select')
            ->get()
            ->keyBy(fn ($row) => $this->compoundKey($row->language_code, $row->theme_key, $row->level));
    }

    public function compoundKey(int|string $language, string $theme, string $level): string
    {
        return $language.'|'.$theme.'|'.$level;
    }
}
