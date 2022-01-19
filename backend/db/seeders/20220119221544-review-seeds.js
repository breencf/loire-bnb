"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          wineryId: 2,
          rating: 5,
          content: "Had a lovely time -- would highly recommend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          wineryId: 3,
          rating: 5,
          content: "Loved the reds!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          wineryId: 17,
          rating: 3,
          content: "Our server was fantastic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          wineryId: 5,
          rating: 5,
          content: "Had a lovely time -- would highly recommend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          wineryId: 21,
          rating: 5,
          content: "Learned so much about winemaking!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("People", null, {});
  },
};
