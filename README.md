# cache_case

koa 后端跨域及http缓存处理 &amp;&amp;　koa缓存中间件

# 需求

访问/api/data将会在第一次请求后缓存一天(一天后过期),并且/api/data的数据在每日0点更新

# 使用方法 

>cnpm i $$ nodemon

# 项目结构

> model 数据模板
middleware 中间件(缓存/跨域)
routes 路由
app.js 主入口
