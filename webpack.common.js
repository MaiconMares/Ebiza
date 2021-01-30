const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/javascript/index.js',
        contacts: './src/javascript/contacts.js',
        services: './src/javascript/services.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['contacts'],
            filename: 'contacts.html',
            inject: false,
            template: './src/views/contacts.ejs',
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'index.html',
            inject: false,
            template: './src/views/index.ejs',
        }),
        new HtmlWebpackPlugin({
            chunks: ['services'],
            filename: 'services.html',
            inject: false,
            template: './src/views/services.ejs',
        }),
        /*
        new HtmlWebpackPlugin({
            title: 'Ebiza - Contato',
            inject: false,
            template: './src/views/contacts.ejs',
        }),
        new HtmlWebpackPlugin({
            title: 'Ebiza - Clientes',
            inject: false,
            template: './src/views/custommers.ejs',
        }),
        */
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { 
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
}