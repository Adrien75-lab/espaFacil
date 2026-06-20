<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

class VerifyEmailFr extends VerifyEmail
{
    protected function buildMailMessage($url): MailMessage
    {
        return (new MailMessage)
            ->subject('Confirmez votre adresse email — LinguaFacil')
            ->greeting('Bienvenue sur LinguaFacil !')
            ->line('Cliquez sur le bouton ci-dessous pour vérifier votre adresse email et activer votre compte.')
            ->action('Vérifier mon email', $url)
            ->line('Ce lien expire dans 60 minutes.')
            ->line('Si vous n\'avez pas créé de compte, ignorez cet email.')
            ->salutation('L\'équipe LinguaFacil');
    }
}
