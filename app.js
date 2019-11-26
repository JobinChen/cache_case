const middleware = require('./middleware/cache')
const CORS = require('./middleware/cors')
const router = require('./routers/index')

var Koa=require('koa');

//实例化
var app=new Koa();

//处理跨域
app.use(CORS)

// 缓存处理中间件
app.use(middleware(86400))

//路由挂载
app.use(router.routes())
   .use(router.allowedMethods());  

app.listen(3000);