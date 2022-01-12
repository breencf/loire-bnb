"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("WineStyleToWineries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      wineryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Wineries" },
      },
      wineStyleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "WineStyles" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("WineStyleToWineries");
  },
};
