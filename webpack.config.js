module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    },
    devtool: '#sourcemap',
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.(js|jsx)?$/,
                exclude: /{node_modules}/,
                loaders: ['babel-loader']
            }
        ]
    }
}