'use strict'
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    'Room',
    {
      name: DataTypes.STRING,
    },
    {}
  )
  Room.associate = function(models) {
    // associations can be defined here
    Room.hasMany(models.Plant, {
      as: 'plants',
      onDelete: 'cascade',
    })
  }
  return Room
}
