var config = {
    entry: {
        app: "./App.js"
    },
    output: {
        path:'./',
        filename:'[name].js'
    },
    devServer: {
        inline: true,
        port: 9090
    },
    module: {
        loaders: [{
            test:/\.jsx?$/,
            exclude:/node_modules/,
            loader:'babel',
            query: {
                presets: ['es2015','react']
            }
        }]
    }
}
module.exports = config