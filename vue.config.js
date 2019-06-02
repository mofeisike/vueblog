// vue.config.js
module.exports = {
    outputDir: "docs",
    devServer: {
        open:false, //自动打开浏览器页面
        port: "9090",
        proxy: {
            '/api': {
                target: 'http://jsonplaceholder.typicode.com', //对应自己的接口
                ws:true,
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //需要重写路径，
                }
            }
        }

    }
}

