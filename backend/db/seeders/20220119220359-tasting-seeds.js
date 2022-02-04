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
          date: "2022-05-04",
          time: "17:59",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numGuests: 2,
          userId: 2,
          wineryId: 12,
          date: "2023-12-03",
          createdAt: new Date(),
          updatedAt: new Date(),
          time: "14:59",
        },
        {
          numGuests: 2,
          userId: 2,
          wineryId: 13,
          date: "2023-12-03",
          createdAt: new Date(),
          updatedAt: new Date(),
          time: "14:59",
        },
        {
          numGuests: 2,
          userId: 2,
          wineryId: 14,
          date: "2023-12-03",
          createdAt: new Date(),
          updatedAt: new Date(),
          time: "14:59",
        },
        {
          numGuests: 2,
          userId: 2,
          wineryId: 15,
          date: "2023-12-03",
          createdAt: new Date(),
          updatedAt: new Date(),
          time: "14:59",
        },
        {
          numGuests: 2,
          userId: 2,
          wineryId: 16,
          date: "2023-12-03",
          createdAt: new Date(),
          updatedAt: new Date(),
          time: "14:59",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tastings", null, {});
  },
};
