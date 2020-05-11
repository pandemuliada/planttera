'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plants', [
      {
        name: 'Cactus',
        description: 'Description of cactus',
        price: 10000,
        stock: 10,
        available: true,
        categoryId: 1,
        roomId: 1,
        picture: 'public/upload/plants/0bkxmbcc.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bonsavile',
        description: 'Description of bonsavile',
        price: 10000,
        stock: 10,
        available: true,
        categoryId: 3,
        roomId: 2,
        picture: 'public/upload/plants/7n7nvjism.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bonsai',
        description: 'Description of bonsai',
        price: 10000,
        stock: 10,
        available: true,
        categoryId: 3,
        roomId: 2,
        picture: 'public/upload/plants/ih6m3vikf.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rose',
        description: 'Description of rose',
        price: 10000,
        stock: 10,
        available: true,
        categoryId: 4,
        roomId: 2,
        picture: 'public/upload/plants/nnli7tbv8.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plants', null, {})
  },
}
