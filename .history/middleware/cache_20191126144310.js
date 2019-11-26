var mcache = require('memory-cache');
const middleware = (duration) => (ctx,  next) => {
  //将请求的originalUrl或者url作为key,返回的参数作为value
  let key = `koa_${ctx.originalUrl || ctx.url}`
  let cachedBody = mcache.get(key)
  //url存在就直接返回
  console.log('缓存是否存在:',cachedBody)
  if (cachedBody) return ctx.body = cachedBody
  next()
  //拿到body参数,设置到缓存 并设置过期时间
  mcache.put(key, ctx.body, duration);
}
 module.exports =  middleware 