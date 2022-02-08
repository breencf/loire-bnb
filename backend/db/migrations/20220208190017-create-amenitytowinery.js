"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("AmenityToWineries", {
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
      amenityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Amenities" },
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
    return queryInterface.dropTable("AmenityToWineries");
  },
};
