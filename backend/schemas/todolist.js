module.exports = function (sequelize, DataTypes) {
    return sequelize.define('t_todolist', {
      id: {
        type: DataTypes.INTEGER(11), 
        allowNull: false, 
        primaryKey: true, 
        autoIncrement: true
      },
      owner_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    }, {
      tableName: 't_todolist'
    })
  };