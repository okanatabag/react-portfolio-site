const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'client/index.js')],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$|\.jsx?$/,
                use: ['react-hot-loader', 'babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'client'),
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
