'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define( 'Task', {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,

    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfter: new Date()
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
    }
  }, {
    timestamps: true
  } );
  Task.associate = function (models) {
    Task.belongsTo( models.User, {
      foreignKey: 'userId',
      as: 'owner'
    } );
  };
  return Task;
};