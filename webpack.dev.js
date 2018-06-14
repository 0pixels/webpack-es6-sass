var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css',
});

module.exports = {
    mode: 'development',
    entry: './src/js/main.js', // Main JS file to compile from
    output: {
        path: path.resolve(__dirname, 'dist'), // Directory to compile to
        filename: 'bundle.js', // Compiled JS file
        publicPath: '/dist', // Where webpack should start its dev server
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Check for .js files
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'], // Transpile to ES6
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/, // Check for .scss/.sass files
                use: extractPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: false,
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                }),
            },
        ],
    },
    plugins: [extractPlugin],
};
