import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
}));
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});
const server = app.listen(3000, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.info(`Server listening on port ${server.address().port}`);
});
