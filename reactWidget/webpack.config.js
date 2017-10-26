const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'bundle.js',
        library: 'MyApp',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devServer: {
        contentBase: './bin'
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: [
                'vendor/*.js'
            ]
        }),
    ]
};
