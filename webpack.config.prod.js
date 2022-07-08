const path = require('path')
const CleanPlugin = require('clean-webpack-plugin');
module.exports  ={
    mode: "production",
    entry: './src/project/app.project.ts',

    output: {
        filename: "bundle.js",
        path:path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'none',
    resolve: {
        extensions: ['.ts','.js']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]


}







