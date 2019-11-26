const _cors = (ctx,next) => {
  //指定服务器端允许进行跨域资源访问的来源域为http://127.0.0.1:5500
  ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

  //指定服务器允许进行跨域资源访问的请求方法列表，一般用在响应预检请求上
  ctx.set("Access-Control-Allow-Methods", "OPTIONS,POST,GET,HEAD,DELETE,PUT");
  
  //指定服务器允许进行跨域资源访问的请求头列表，一般用在响应预检请求上
  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
  
  //告诉客户端返回数据的MIME的类型，这只是一个标识信息,并不是真正的数据文件的一部分
  ctx.set("Content-Type", "application/json;charset=utf-8");
  
  //设置http缓存,并且缓存时间为一天
  ctx.set("Cache-Control", 'max-age=86400');

  //它的值是一个布尔值，表示是否允许客户端跨域请求时携带身份信息(Cookie或者HTTP认证信息)。默认情况下，Cookie不包括在CORS请求之中。当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";如果没有设置这个值，浏览器会忽略此次响应。
  ctx.set("Access-Control-Allow-Credentials", true);

  next()
}
module.exports =  _cors 