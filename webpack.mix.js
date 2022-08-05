const mix = require('laravel-mix');

if (mix.inProduction()) {
    mix.sourceMaps().disableNotifications().version();
}

require('laravel-mix-alias');
mix.alias({
    '@Bocian': '/Modules/Bocian/Resources/js',
    '@BocianMedia': '/Modules/Bocian/Resources/js/_Media',
    '@Core': '/Modules/Core/Assets/js',
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    // .extract()
    .sass('resources/sass/app.scss', 'public/css');
