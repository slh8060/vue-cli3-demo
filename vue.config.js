const path = require('path');
const resolve = (src) => path.join(__dirname, src);

module.exports =  {
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                'src': resolve('./src'),
                'views': resolve('./src/views')
            }
        }
    }
}