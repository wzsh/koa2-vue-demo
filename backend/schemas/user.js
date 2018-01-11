module.exports = function (sequelize, DataTypes) {
    return sequelize.define('t_user', {
      id: {
        type: DataTypes.INTEGER(11), 
        allowNull: false, 
        primaryKey: true, 
        autoIncrement: true
      },
      username: {
        type: DataTypes.CHAR(64),
        allowNull: false
      },
      password: {
        type: DataTypes.CHAR(64),
        allowNull: true
      },
      realname: {
        type: DataTypes.CHAR(64),
        allowNull: true
      }
    }, {
      tableName: 't_user'
    })
  };