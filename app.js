const koa = require('koa')
const app = new koa()
const path = require('path')
//引入新增中间件
const onerror = require('koa-onerror')  //处理非法入侵
const koaBody = require('koa-body')
const json = require('koa-json')
const logger = require('koa-logger')
// 初始路由
const responseFormatter = require('./middleware/response_formatter')    //初始化返回数据格式
const { apiPrefix } = require('./config/index')    //解构路由url 规范设置
const routers = require('./routers/index')  //模块化的路由
require('./dbhelper/db')    //直接引入执行
onerror(app)    //过滤非法入侵

// 挂载中间件
app.use(koaBody({
    multipart:true,
    formidable:{
        formidable:{
            uploadDir:path.join(__dirname,"public/upload"),
            keepExtensions:true,
            maxFieldsSize:2*1024*1024,
            onFileBegin:(name,file)=>{
                console.log(file);
            }
        }
    }
}))
app.use(json())
app.use(logger())

//执行路由前 将url规范设置参数传递进去
app.use(responseFormatter(apiPrefix))

app.use( routers.routes()).use(routers.allowedMethods())

//监听error
app.on('error',(err,ctx)=>{
    console.error('server error',err,ctx);
})
app.listen(3300,()=>{
    console.log('链接成功：http://localhost:3300');
})