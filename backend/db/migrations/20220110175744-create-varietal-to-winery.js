"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("VarietalToWineries", {
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
      varietalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Varietals" },
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
    return queryInterface.dropTable("VarietalToWineries");
  },
};
