const home = require('koa-router')()
home.get('/',async (ctx)=>{
 ctx.status = 200
  ctx.body = {
       text:'abc'
     }
})

module.exports = home