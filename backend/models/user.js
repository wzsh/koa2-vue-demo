const db  = require('../config/db.js')
//const userModel = require('../schemas/user.js')

const MasterDB = db.MasterDB 
const User = MasterDB.import('../schemas/user.js')
//const Op = Sequelize.Op

const GetUserByUsername = async function (username) {
    const userInfo = await User.findOne({
      where: {
        //username: { [Op.eq]: username }
        username: username 
      }
    })
  
    return userInfo
  }
  
module.exports = { GetUserByUsername }