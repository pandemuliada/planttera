'use strict'
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define(
    'Shop',
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {}
  )
  Shop.associate = function(models) {
    // associations can be defined here
  }
  return Shop
}
