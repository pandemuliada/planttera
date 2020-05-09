'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Plants', 'price', {
        type: Sequelize.INTEGER,
      }),

      queryInterface.addColumn('Plants', 'stock', {
        type: Sequelize.INTEGER,
      }),

      queryInterface.addColumn('Plants', 'available', {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Plants', 'price'),
      queryInterface.removeColumn('Plants', 'stock'),
      queryInterface.removeColumn('Plants', 'available'),
    ])
  },
}
