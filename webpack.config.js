var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:  './src/app.js',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './build',
        port: 8080
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        alias:{
            "~root": path.resolve( __dirname, 'src' ),
            "~components": path.resolve(__dirname, 'src', 'components'),
            "~styles": path.resolve(__dirname, 'src', 'styles')
        },
        extensions: ['', '.js', '.scss']
    }
};