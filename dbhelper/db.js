const mongoose = require('mongoose')
const config = require('../config')

//上这个是因为：mongoose 的所有查询操作返回的结果都是 query ，
//mongoose 封装的一个对象，并非一个完整的 promise，而且与 ES6 标准的 promise 有所出入，
//因此在使用 mongoose 的时候，一般加上这句 mongoose.Promise = global.Promise。

mongoose.Promise = global.Promise

const IS_PROD = ['production','prod','pro'].includes(process.env.NODE.ENV)
const dataBaseUrl = IS_PROD?config.databasePro:config.database
console.log(dataBaseUrl,"链接资料");
/**
 * 链接数据库
 */
mongoose.connect(dataBaseUrl,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    config:{
        autoIndex:false
    }
})

/**
 * 链接成功
 */
mongoose.connection.on('connected',()=>{
    console.log(`Mongoose链接成功:${dataBaseUrl}`);
})

/**
 * 链接异常
 */
mongoose.connection.on('error',(err)=>{
    console.log(`Mongoose链接出错:${err}`);
})

/**
 * 链接断开
 */
mongoose.connection.on('disconnected',()=>{
    console.log('Mongoose 链接关闭！');
})
//暴露在app引入
module.exports = mongoose