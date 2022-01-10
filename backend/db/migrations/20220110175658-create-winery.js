"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Wineries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT(1500),
        allowNull: false,
      },
      lat: {
        type: Sequelize.INTEGER,
      },
      long: {
        type: Sequelize.INTEGER,
      },
       address: {
         type: Sequelize.STRING,
       },
      town: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      maxGuests: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      regionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable("Wineries");
  },
};
