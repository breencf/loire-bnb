"use strict";
module.exports = (sequelize, DataTypes) => {
  const VarietalToWineries = sequelize.define(
    "VarietalToWineries",
    {
      wineryId: { type: DataTypes.INTEGER, allowNull: false },
      varietalId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  VarietalToWineries.associate = function (models) {
    // associations can be defined here
  };
  return VarietalToWineries;
};
