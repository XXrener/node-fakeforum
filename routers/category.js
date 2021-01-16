const router = require('koa-router')()

router.get('/', async (ctx)=>{
    let api = process.env
    ctx.body= api
})

module.exports = router