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
   .styles([
   			"public/admin/assets/vendor_components/bootstrap/dist/css/bootstrap.css",
		    "public/admin/assets/vendor_components/font-awesome/css/font-awesome.css",
		    "public/admin/assets/vendor_components/Ionicons/css/ionicons.css",
		    "public/admin/css/master_style.css",
		    "public/admin/css/skins/_all-skins.css",
   			], 'public/css/admin/sample.min.css')
   .js("public/admin/js/pages/sample.js", 'public/js/admin/sample.min.js')
   ;
