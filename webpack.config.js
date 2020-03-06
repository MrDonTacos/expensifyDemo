const path = require('path');

module.exports = {
    entry: './src/playground/redux-expensify.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            use: ['babel-loader'],
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
        },{
            test: /\.(css|scss)$/,
            use:['style-loader','css-loader', 'sass-loader']
        }
    ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        publicPath: '/public/',
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }

};

//loader