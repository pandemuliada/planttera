'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Plants', 'picture', {
      type: Sequelize.STRING,
      defaultValue: 'public/upload/plants/default.png',
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Plants', 'picture')
  },
}
