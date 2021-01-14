const router = require('koa-router')()

router.get('/', async (ctx)=>{
    ctx.body="分类的接口"
})

module.exports = router