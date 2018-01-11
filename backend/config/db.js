const Sequelize = require('sequelize')

const MasterDB = new Sequelize('postgres://gve:1208@localhost:5432/mentordb', {
    define: {
      timestamps: false // cancle createdAt updatedAt
    }
  })
  
  module.exports = { MasterDB }