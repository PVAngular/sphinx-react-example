var path = require('path');
var webpack = require('webpack');


// const plugins = [
//     new webpack.ProvidePlugin({
//         $: 'jquery',
//     }),
// ];

module.exports = {
    'entry': {
        'index': './js/main.js',
    },
    'output': {
        'filename': '[name].bundle.js',
        'path': path.join(__dirname, 'build'),
    },
    module: {
        loaders: [
            { // for ECMA Script 2015
                loader: 'babel',
                test: /\.jsx?$/,
                exclude: /node_modules/,
            },
            { // for React JSX
                loader: 'babel!jsx-loader',
                test: /\.jsx$/,
                exclude: /node_modules/,
            },
    //         // for bootstrap
    //         {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
    //         {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    //         {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    //         {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    //         {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    //         {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    //         { // for css
    //             loader: 'style!css',
    //             test: /\.css$/,
    //         },
    //         { // for stylus
    //             loader: 'style-loader!css-loader!stylus-loader',
    //             test: /\.styl/,
    //             exclude: /(node_modules|bower_components)/,
    //         },
        ],
    },
    // resolve: {
    //     extensions: [
    //         '', '.js', '.jsx', '.styl',
    //     ],
    //     root: [
    //         __dirname,
    //         path.join(__dirname, 'node_modules'),
    //     ],
    // },
    // plugins: plugins,
}
