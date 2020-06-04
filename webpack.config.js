const path = require('path') //this already comes built with Nodejs

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist"), //absolute path, example: users/wfiallos/code/my_profile/<rootDir>/dist
        filename: 'main.js' //I can call it app.js if I want, or anything, and then npm run build again.
    },
    module: {
        rules: [
            {
                test: /\.js$/, //can also put .(js|jsx|ts)$
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets:["@babel/preset-env"]
                }
            }
        ]
    }
}