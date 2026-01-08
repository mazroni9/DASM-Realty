<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => array_filter([
        env('FRONTEND_URL', 'http://localhost:3000'),
        env('VERCEL_URL'), // For Vercel deployments
        'https://dasm-realty-dasme-projects.vercel.app',
        'https://dasm-realty.vercel.app',
    ]),
    'allowed_origins_patterns' => [
        '/^https:\/\/.*\.vercel\.app$/',
    ],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];


