const Cache = require('./middleware/cache')
const CORS = require('./middleware/cors')
const router = require('./routers/index')
const cron = require('node-cron')
const indexDate = require('./model/index')

cron.schedule('0 0 0 * * *', () => {
   indexDate.data.time  = new Date();
   console.log(`数据更新了:${indexDate}`)
 });
var Koa=require('koa');

//实例化
var app=new Koa();

//处理跨域
app.use(CORS)


// 缓存处理中间件
app.use(Cache(86400))

//路由挂载
app.use(router.routes())
   .use(router.allowedMethods());  

app.listen(3000);