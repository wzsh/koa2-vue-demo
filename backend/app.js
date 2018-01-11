const Koa = require('koa')
const json = require('koa-json')
const logger = require('koa-logger')
const auth = require('./routes/auth.js')
const api = require('./routes/api.js')
const jwt = require('koa-jwt')
//const historyApiFallback = require('koa2-history-api-fallback')
const koaRouter = require('koa-router')
const koaBodyparser = require('koa-bodyparser')
const cors = require('koa-cors');

const app = new Koa()
const router = koaRouter()

let port = 8989

app.use(cors());
app.use(koaBodyparser())
app.use(json())
app.use(logger())

app.use(async function (ctx, next) {
  let start = new Date()
  await next()
  let ms = new Date() - start
  console.log('%s %s - %s', ctx.method, ctx.url, ms)
})

app.use(async function (ctx, next) {  //  如果JWT验证失败，返回验证失败信息
  try {
    await next()
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        success: false,
        token: null,
        info: 'Protected resource, use Authorization header to get access'
      }
    } else {
      throw err
    }
  }
})

app.on('error', function (err, ctx) {
  console.log('server error', err)
})

router.use('/auth', auth.routes()) 
router.use('/api', jwt({secret: 'gve-web-mentoring'}), api.routes()) 

app.use(router.routes()) // 将路由规则挂载到Koa上。
//app.use(historyApiFallback())

module.exports = app.listen(port, () => {
  console.log(`Koa is listening in ${port}`)
})
