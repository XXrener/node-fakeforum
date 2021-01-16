const Model = require('../models/category')
// TODO: 此文件中最好返回 Promise。通过 .exec() 可以返回 Promise。
// 需要注意的是 分页插件本身返回的就是 Promise 因此 Model.paginate 不需要 exec()。
// Model.create 返回的也是 Promise

// 直接定义暴露方法
exports.findAll = ()=>{ Model.find().sort({rank:1}).exec() }