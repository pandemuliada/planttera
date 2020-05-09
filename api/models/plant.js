'use strict'
module.exports = (sequelize, DataTypes) => {
  const Plant = sequelize.define(
    'Plant',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      roomId: DataTypes.INTEGER,
      picture: DataTypes.STRING,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      available: DataTypes.BOOLEAN,
    },
    {}
  )
  Plant.associate = function(models) {
    Plant.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
      onDelete: 'cascade',
    })

    Plant.belongsTo(models.Room, {
      foreignKey: 'roomId',
      as: 'room',
      onDelete: 'cascade',
    })
  }
  return Plant
}
