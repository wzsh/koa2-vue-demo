const user = require('../models/user.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const PostUserAuth = async function (ctx) {
    const data = ctx.request.body
    const userInfo = await user.GetUserByUsername(data.username)
    if (userInfo != null) { 
      pwd = userInfo.password.replace(/[\r\n]/g,"")
      if ( data.password !== pwd) {
        ctx.body = {
          success: false, 
          info: 'Wrong Password！'
        }
      } else {
        const userToken = {
          username: userInfo.username,
          realname: userInfo.realname,
          id: userInfo.id
        }
        const secret = 'gve-web-mentoring'
        const token = jwt.sign(userToken, secret)
        ctx.body = {
          success: true,
          token: token 
        }
      }
    } else {
      ctx.body = {
        success: false,
        info: 'Username not found！' // 如果用户不存在返回用户不存在
      }
    }
  }

  module.exports = {PostUserAuth}