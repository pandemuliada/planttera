'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Cactus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Herbal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Flower',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bonsai',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  },
}
