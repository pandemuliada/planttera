'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Roles',
      [
        {
          name: 'super-admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'verified-user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {})
  },
}
