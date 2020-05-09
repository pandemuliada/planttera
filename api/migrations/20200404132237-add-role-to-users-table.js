'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'role', {
      type: Sequelize.ENUM,
      values: ['admin', 'operator'],
      defaultValue: 'operator',
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'role')
  },
}
