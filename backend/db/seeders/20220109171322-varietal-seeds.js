"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Varietals",
      [
        {
          type: "Melon de Bourgogne",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { type: "Chenin Blanc", createdAt: new Date(), updatedAt: new Date() },
        {
          type: "Cabernet Franc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { type: "Romorantin", createdAt: new Date(), updatedAt: new Date() },
        { type: "Chardonnay", createdAt: new Date(), updatedAt: new Date() },
        {
          type: "Sauvignon Blanc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { type: "Folle Blanche", createdAt: new Date(), updatedAt: new Date() },
        { type: "Tressailier", createdAt: new Date(), updatedAt: new Date() },
        { type: "Pinot Noir", createdAt: new Date(), updatedAt: new Date() },
        { type: "10", createdAt: new Date(), updatedAt: new Date() },
        { type: "Grolleau", createdAt: new Date(), updatedAt: new Date() },
        { type: "Côt/Malbec", createdAt: new Date(), updatedAt: new Date() },
        {
          type: "Pineau d'Aunis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Varietals", null, {});
  },
};
