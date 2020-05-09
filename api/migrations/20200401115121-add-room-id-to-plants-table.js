'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Plants', 'roomId', {
      type: Sequelize.INTEGER,
      onDelete: 'cascade',
      references: {
        model: 'Rooms',
        key: 'id',
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Plants', 'roomId')
  },
}
