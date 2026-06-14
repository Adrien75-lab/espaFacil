## LinguaFacil project instructions

Before working on this repository, read the project-local LinguaFacil skill:

- `.claude/skills/linguafacil/SKILL.md`
- `.claude/skills/linguafacil/references/current-status.md`
- `.claude/skills/linguafacil/references/architecture.md`
- `.claude/skills/linguafacil/references/workflow.md`

For every feature, phase, bug fix requiring user acceptance, branch delivery, recipe, pull request, CI or merge, also read:

- `.claude/skills/feature-delivery-workflow/SKILL.md`
- `.claude/skills/feature-delivery-workflow/references/acceptance-template.md`

Run `.claude/skills/linguafacil/scripts/project_snapshot.ps1` at the beginning of a resumed session. Git is the source of truth when the documented snapshot and the repository differ.

Never modify the legacy root files `index.html`, `style.css`, or `script.js`. The active application lives in `frontend/` and `backend/`.
