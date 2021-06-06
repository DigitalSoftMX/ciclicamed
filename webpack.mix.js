const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const mix = require('laravel-mix');
var path = require('path');
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
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    },
                    exclude: /node_modules/,
                    options: {
                        transpileOnly: true
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    loader: 'file-loader',
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                  },
            ]
        },
        // output: {
        //     filename: 'js/main/[name].js',
        //     chunkFilename: 'js/chunks/[name].js',
        // },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx", ".svg", ".jpg", ".jpeg"],
            alias: {
                '@component': path.resolve('./resources/js/components'),
                '@data': path.resolve('./resources/js/defaultData'),
                '@interface': path.resolve('./resources/js/interfaces'),
                '@page': path.resolve('./resources/js/pages'),
                '@config': path.resolve('./resources/js/config'),
                '@library': path.resolve('./public/js'),
                '@svg': path.resolve('./public/svg'),
            },
            modules: [
                path.resolve('./node_modules'),
                path.resolve('./resources/js'),
                path.resolve('./public/js'),
                path.resolve('./public/svg')
            ]
        },
        plugins: [new ForkTsCheckerWebpackPlugin()]
    });
