const mix = require('laravel-mix');

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
    .sass('resources/sass/style.scss', 'public/css')
    .sourceMaps()
    .vue()
    .browserSync('http://127.0.0.1:8000/')
    .webpackConfig({
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                },
                exclude: /node_modules/
            }]
        },
        // output: {
        //     filename: 'js/main/[name].js',
        //     chunkFilename: 'js/chunks/[name].js',
        // },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx", ".interface.ts", ".data"]
        }
    });
