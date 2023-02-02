// vue.config.js
const runTimeCompiler = true;

module.exports = {
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config
                .output
                .filename('[name].[hash].js')
                .chunkFilename('[name].[hash].js')
                .end()
        }
    }
}