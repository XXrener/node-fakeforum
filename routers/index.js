const router = require('koa-router')();
// 路由配置 接口规范
const { apiPrefix } = require('../config/index');

const blog = require('./blog');
const category = require('./category');

router.prefix(apiPrefix);

router.use('/blogs', blog.routes(), blog.allowedMethods());
router.use('/categories', category.routes(), category.allowedMethods());

module.exports = router;

// 作者：明么
// 链接：https://juejin.cn/post/6905193980237971464
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。