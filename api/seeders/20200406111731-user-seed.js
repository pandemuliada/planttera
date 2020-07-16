'use strict'

const { hashPassword } = require('../helpers/bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Super Admin',
        email: 'superadmin@gmail.com',
        password: hashPassword('superadmin@gmail.com'),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User',
        email: 'user@gmail.com',
        password: hashPassword('user@gmail.com'),
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  },
}
