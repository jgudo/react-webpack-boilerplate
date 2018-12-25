const path = require('path');
const dir = path.join(__dirname, 'public');

console.log(dir);
module.exports = {
    entry: './src/app.js',
    output: {
        path: dir,
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]    
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: dir 
    }
}