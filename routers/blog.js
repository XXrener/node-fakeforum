const router = require('koa-router')();
//原路由
router.get('/', async (ctx) => {
    // 规定传id
  ctx.body = `我是文章接口id:${ctx.query.id}`;
});
//动态路由 即传递参数
router.get('/:id', async(ctx)=>{
  ctx.body = `动态路由文章接口id:${ctx.params.id}`
})
router.post('/', async(ctx)=>{
  console.log(ctx.request.body,"正文内容");
  ctx.body = ctx.request.body
})
router.put('/:id', async (ctx) => {
  ctx.body = `PUT: ${ctx.params.id}`;
});

router.del('/:id', async (ctx) => {
  ctx.body = `DEL: ${ctx.params.id}`;
});

module.exports = router;