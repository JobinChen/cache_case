const home = require('koa-router')()
const Cache = require('../middleware/cache')
const indexDate = require('../model/index')
// 缓存处理中间件
home.get('/data',Cache(86400),async (ctx)=>{
 ctx.status = 200
  ctx.body = indexDate
})

module.exports = home