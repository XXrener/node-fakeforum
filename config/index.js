module.exports = {
    apiPrefix:'/api',   //路由规范
    port:process.env.PORT||3000,    //数据库 设置
    database:'mongodb://localhost:27017/fakeforum',
    databasePro:'mongodb://root:12345@服务器公务ip/端口/库名称'
}