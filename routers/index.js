const router = require('koa-router')()
const home = require('./home')

router.use('/api',home.routes(),home.allowedMethods())
module.exports = router