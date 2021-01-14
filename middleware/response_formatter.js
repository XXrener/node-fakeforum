//处理api返回的数据格式化
const ApiError = require('../error/api_error')
const ApiErrorNames = require('../error/api_error_name')

const responseFormatter = (apiPrefix)=> async (ctx,next)=>{
    if(ctx.request.path.startsWith(apiPrefix)){
        //使用try catch 抛出异常
        try{
            // 等待路由执行
            await next()

            if(ctx.reponse.status === 404){
                throw new ApiError(ApiErrorNames.NOT_FOUND)
            }else{
                ctx.body = {
                    code = 'success',
                    message='成功',
                    result:ctx.body
                }
            }
        }catch(error){
            //如果异常类型是API异常 将错误信息添加到响应体中返回
            //instanceof 检测 一个对象是否在另一个对象的原型链上
            //error 实例是否在ApiError的原型链上 \ 或者error实例是否在ApiError的构造函数中
            if(error instanceof ApiError){
                ctx.body = {
                    code = error.code,
                    message=error.message,
                }
            }else{
                ctx.status = 400;
                ctx.response.body = {
                    code:error.name,
                    message:error.message
                }
            }
        }
    }else{
        await next()
    }
}

module.exports = responseFormatter