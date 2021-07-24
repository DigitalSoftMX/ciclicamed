const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const mix = require('laravel-mix');
var path = require('path');
const webpack = require('webpack');
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

mix.js('resources/js/app.ts', 'public/js')
    //Administrador paginas
    .js('resources/js/load/administrador/AdministradorBranchPage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorCheckupPage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorCobrosPage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorConsultPage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorDashboardPage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorImagenologiaPage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorLaboratorioPage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorMedicamentPage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorPrescriptionPage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorProductPage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorProfilePage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorSchedulePage.ts', 'public/js')
    .js('resources/js/load/administrador/AdministradorUserPage.ts', 'public/js')
    .sass('resources/sass/style.scss', 'public/css')
    .sourceMaps()
    .vue()
    .extract(['vue'])
    .browserSync('http://127.0.0.1:8000/')
    .webpackConfig({
        output: {
            publicPath: 'auto',
        },
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
                {
                    test: require.resolve("jquery"),
                    loader: "expose-loader",
                    options: {
                      exposes: ["$", "jQuery"],
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
                path.resolve('./public/svg'),
                path.resolve('./node_modules')
            ],
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: true,
            }),
        ]
    });
