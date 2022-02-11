'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Likes', [
        {
          wineryId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 1,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 3,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 4,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 4,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 4,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 5,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 6,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 6,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 6,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 7,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 7,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 7,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 8,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 8,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 8,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 8,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 8,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 9,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wineryId: 9,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Likes', null, {});

  }
};
