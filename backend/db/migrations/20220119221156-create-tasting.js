'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tastings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      wineryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Wineries" },
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      numGuests: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tastings');
  }
};
