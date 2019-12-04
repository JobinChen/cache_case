const home = require('koa-router')()
const indexDate = require('../model/index')
home.get('/',async (ctx)=>{
 ctx.status = 200
  ctx.body = indexDate
})

module.exports = home