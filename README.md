# cache_case
koa 后端跨域及http缓存处理 &amp;&amp;　koa缓存中间件
# 请求方式
axios({
      method: 'get',
      url: 'http://127.0.0.1:3000/api/',
      headers: {
        'Content-Type':"application/x-www-form-urlencoded",
      },
      responseType: 'json',
    }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    })