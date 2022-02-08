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
          content:
            "My friends and I had a lovely time tasting with Nicolas. The Coulee de Serrant vineyard is indeed one of the most special in the world, as evidenced by the wines we tasted and the expertise Nicolas displayed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          wineryId: 2,
          rating: 2,
          content:
            "I was very disappointed as this winery only makes white wines, while my husband and I wouldn't dare drink anything but full bodied reds. Preposterous!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          wineryId: 17,
          rating: 3,
          content:
            "Our server was fantastic, we loved the wines. tell all your friends!",
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
