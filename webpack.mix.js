let mix = require('laravel-mix');

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

mix
   .sass('public/admin/sass/pages/sample.min.scss','public/css/admin')
   .js("public/admin/js/pages/sample.js", 'public/js/admin/sample.min.js')
   ;
