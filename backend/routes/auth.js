const koaRouter = require('koa-router')
const router = koaRouter()
const auth = require('../controllers/user.js')

//router.get('/user/:id', auth.getUserInfo) 
router.post('/user', auth.PostUserAuth)

module.exports = router