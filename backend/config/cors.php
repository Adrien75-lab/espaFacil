<?php
return [
    'paths'                    => ['api/*', 'sanctum/csrf-cookie', 'sanctum/*'],
    'allowed_methods'          => ['*'],
    'allowed_origins'          => array_filter(array_map('trim', array_merge(
        ['http://localhost:5173', 'http://127.0.0.1:5173'],
        env('CORS_ALLOWED_ORIGINS') ? explode(',', env('CORS_ALLOWED_ORIGINS')) : [],
        ['https://linguafacil.vercel.app']
    ))),
    'allowed_origins_patterns' => ['https://*-lingua-facil.vercel.app'],
    'allowed_headers'          => ['*'],
    'exposed_headers'          => [],
    'max_age'                  => 0,
    'supports_credentials'     => true,
];
