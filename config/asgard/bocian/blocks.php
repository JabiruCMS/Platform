<?php

return [
    // available block designs per block type
    'block-designs' => [
        'text' => [
            [
                'name' => 'category-header',
                'label' => 'Category header',
                'classes' => 'category-header'
            ],
            [
                'name' => 'product-header',
                'label' => 'Product header',
                'classes' => 'product-header'
            ],
            [
                'name' => 'product-header-small-margin',
                'label' => 'Product header (small margin)',
                'classes' => 'product-header small-margin'
            ],
            [
                'name' => 'small-header',
                'label' => 'Small header',
                'classes' => 'small-header'
            ],
        ],
        'wysiwyg' => [
            [
                'name' => 'narrow-article',
                'label' => 'Narrow article',
                'classes' => 'narrow-article'
            ]
        ],
        'specification' => [
            [
                'name' => 'horizontal',
                'label' => 'Horizontal',
                'classes' => 'horizontal'
            ]
        ],

        'picture' => [
            [
                'name' => 'dark',
                'label' => 'Dark Header',
                'classes' => 'dark',
            ],
            [
                'name' => 'light',
                'label' => 'Light Header',
                'classes' => 'light',
            ],
            [
                'name' => 'recommended-frame-size',
                'label' => 'Recommended Frame Size',
                'classes' => 'recommended-frame-size',
            ],
        ],

        'product' => [
            [
                'name' => 'light',
                'label' => 'Light Header',
                'classes' => 'light',
            ],
        ],
    ],

    // specifies what blocks are available for which entity
    'blocks-by-entity' => [
        \Modules\Catalog\Entities\Product::class => ['wysiwyg', 'picture', 'video', 'newline', 'specification', 'technical-detail', 'review', 'geometry', 'text', 'description', 'blade', 'engine', 'anchor'],
        \Modules\Catalog\Entities\Category::class => ['wysiwyg', 'picture', 'video', 'newline', 'product', 'text', 'anchor'],
        \Modules\Blog\Entities\Post::class => ['wysiwyg', 'picture', 'video', 'newline', 'product', 'text', 'gallery', 'anchor'],
        \Modules\Page\Entities\Page::class => ['wysiwyg', 'picture', 'video', 'newline', 'product', 'text', 'gallery', 'anchor'],
    ]


];

