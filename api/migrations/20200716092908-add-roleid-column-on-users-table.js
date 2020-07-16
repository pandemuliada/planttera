'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'roleId', {
      type: Sequelize.INTEGER,
      onDelete: 'cascade',
      references: {
        model: 'Roles',
        key: 'id',
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'roleId')
  },
}
