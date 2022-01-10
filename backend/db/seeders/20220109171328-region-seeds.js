"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Regions",
      [
        { name: "Pays Nantais", createdAt: new Date(), updatedAt: new Date() },
        { name: "Anjou", createdAt: new Date(), updatedAt: new Date() },
        { name: "Saumur", createdAt: new Date(), updatedAt: new Date() },
        { name: "Touraine", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Coteaux-du-Giennois",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Sancerre", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Pouilly-fumé/Pouilly-sur-Loire",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Menetou Salon", createdAt: new Date(), updatedAt: new Date() },
        { name: "Valençay", createdAt: new Date(), updatedAt: new Date() },
        { name: "Quincy", createdAt: new Date(), updatedAt: new Date() },
        { name: "Reuilly", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Châteaumeillant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saint-Pourçain",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côtes Roannaises",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côtes d’Auvergne",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côtes du Forez",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Vouvray", createdAt: new Date(), updatedAt: new Date() },
        { name: "Chinon", createdAt: new Date(), updatedAt: new Date() },
        { name: "Bourgueil", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Regions", null, {});
  },
};
