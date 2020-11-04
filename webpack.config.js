const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, '/public'),
        filename: 'app.js'
    },
    entry: {
        main: './client/main.js'
    },
    devServer : {
        contentBase : path.resolve(__dirname,'public'),
        historyApiFallback : true,
        port :5000
    }
}