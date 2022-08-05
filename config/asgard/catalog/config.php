<?php

return [
    'name' => 'Catalog',

    'partials' => [
        'translatable' => [
            'create' => [],
            'edit' => [],
        ],
        'normal' => [
            'create' => [],
            'edit' => [],
        ],
    ],

    'currencies' => [
        'CZK',
        'EUR',
    ],

    'product-attachments' => [
        [
            'name' => 'main',
            'zone' => 'main',
            'type' => 'single',
            'label' => 'Hlavní obrázek v detailu produktu'
        ],
        [
            'name' => 'tile',
            'zone' => 'tile',
            'type' => 'single',
            'label' => 'Obrázek pro dlaždice a odkazy'
        ],
        [
            'name' => 'gallery',
            'zone' => 'gallery',
            'type' => 'multiple',
            'label' => 'Hlavní galerie produktu'
        ],

    ],

    'use-stock-module' => false,
    'default-in-stock-status' => true,

];
