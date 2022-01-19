"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tastings",
      [
        {
          numGuests: 1,
          userId: 2,
          wineryId: 11,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numGuests: 2,
          userId: 2,
          wineryId: 12,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tastings", null, {});
  },
};
