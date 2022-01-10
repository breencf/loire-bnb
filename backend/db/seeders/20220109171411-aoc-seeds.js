"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "AOCs",
      [
        {
          name: "Fiefs-Vendéens-Brem",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fiefs-Vendéens Chantonnay",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fiefs-Vendéens-Mareuils",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fiefs-Vendéens-Pissotte",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fiefs-Vendéens-Vix",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gros-plant du Pays Nantais",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Muscadet", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Muscadet-Coteaux-de-la-Loire",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Muscadet-Côtes-de-Grand-Lieu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Muscadet-Sèvre-et-Maine",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Anjou", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Anjou Mousseux",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anjou Pétillant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anjou-Coteaux-de-la-Loire",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Anjou-10", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Anjou-Villages",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anjou-Villages Brissac",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Bonnezeaux", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Cabernet-d'Anjou",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Chaume", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Coteaux-d'Ancenis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coteaux-de-l'Aubance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coteaux-du-Layon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Quarts-de-Chaume Grand Cru",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Rosé d'Anjou", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Rosé d'Anjou pétillant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Savennières", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Savennières-Coulée-de-Serrant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Savennières-Roche-aux-Moines",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vin-du-Thouarsais",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cabernet-de-Saumur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coteaux-de-Saumur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Saumur", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Saumur Mousseux",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saumur Pétillant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saumur Puy-Notre-Dame",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saumur-Champigny",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Bourgueil", createdAt: new Date(), updatedAt: new Date() },
        { name: "Cheverny", createdAt: new Date(), updatedAt: new Date() },
        { name: "Chinon", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Coteaux-du-Loir",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coteaux-du-Vendômois",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Cour-Cheverny", createdAt: new Date(), updatedAt: new Date() },
        { name: "Haut-Poitou", createdAt: new Date(), updatedAt: new Date() },
        { name: "Jasnières", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Montlouis-sur-Loire",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Montlouis-sur-Loire Mousseux",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Montlouis-sur-Loire Pétillant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saint-Nicolas-de-Bourgueil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Touraine", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Touraine Mousseux",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Touraine Pétillant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Touraine-Amboise",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Touraine-Azay-le-Rideau",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Touraine Chenonceaux",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Touraine-Mesland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Touraine-Noble-Joué",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Touraine Oisly",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Valençay", createdAt: new Date(), updatedAt: new Date() },
        { name: "Vouvray", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Vouvray Mousseux",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vouvray Pétillant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Orléans", createdAt: new Date(), updatedAt: new Date() },
        { name: "Orléans-Cléry", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Blanc Fumé de Pouilly",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Châteaumeillant",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côte-Roannaise",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coteaux-du-Giennois",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côtes-d'Auvergne",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côtes-d'Auvergne-Boudes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côtes-d'Auvergne-Chanturgue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côtes-d'Auvergne-Châteaugay",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côtes-d'Auvergne-Corent",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côtes-d'Auvergne-Madargues",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Côtes-du-Forez",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Menetou-Salon", createdAt: new Date(), updatedAt: new Date() },
        { name: "Pouilly-Fumé", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Pouilly-sur-Loire",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Quincy", createdAt: new Date(), updatedAt: new Date() },
        { name: "Reuilly", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Saint-Pourçain",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Sancerre", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("AOCs", null, {});
  },
};
