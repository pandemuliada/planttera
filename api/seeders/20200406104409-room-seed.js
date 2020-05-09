'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rooms', [
      {
        name: 'Bedroom',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kitchen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Living Room',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Office',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {})
  },
}
