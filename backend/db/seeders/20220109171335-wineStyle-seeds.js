"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "WineStyles",
      [
        { type: "Sparkling", createdAt: new Date(), updatedAt: new Date() },
        { type: "White", createdAt: new Date(), updatedAt: new Date() },
        {
          type: "Orange/Skin-Contact",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { type: "Rosé", createdAt: new Date(), updatedAt: new Date() },
        { type: "Red", createdAt: new Date(), updatedAt: new Date() },
        {
          type: "Dessert/Fortified",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("WineStyles", null, {});
  },
};
