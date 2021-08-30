const path = require('path');
const HtmlWebPackPlugin =require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// modulo a exportar
module.exports={
    //archivos de partida
    entry:'./src/index.js',
    //salida
    output:{
        //directorio en el que nos encontramos y donde vamos a guardar los archivos osea dist
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    //para resolver las extensiones
    resolve:{
        extensions:['.js','.jsx']
    },
    //reglas necesarias para el proyecto
    module:{
        rules:[
            {            
                //expresion regular para identificar los archivos js y jsx
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.html$/,
                use:[
                    {
                    loader:'html-loader'
                    }
                ]

            },
            {
                test: /\.(s*)css$/,
                use:[{
                    loader:MiniCssExtractPlugin.loader,                
                },
                'css-loader',
                'sass-loader'
              ]
            }
        ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]

}