// place it with same level of package.json 
// vue.config.js 設定指南 : https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
module.exports = {
    // publicPath 為 project-name，根目錄地址為上傳的網域
    publicPath: '/KasongNursingHome/',
    pluginOptions: {
        sitemap: {
            urls: [
                'https://kenchen879.github.io/KasongNursingHome/',
                'https://kenchen879.github.io/KasongNursingHome/orginazation',
                'https://kenchen879.github.io/KasongNursingHome/service',
                'https://kenchen879.github.io/KasongNursingHome/environment',
                'https://kenchen879.github.io/KasongNursingHome/activities'
            ]
        }
    }
    // devServer:{
    //     public:'140.113.73.54:8080/KasongNursingHome/',
    //     port: 8080,
    //     https: false,
    //     disableHostCheck: true,
    //     open: false
    // }
};