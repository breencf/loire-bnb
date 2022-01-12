"use strict";
module.exports = (sequelize, DataTypes) => {
  const WineStyleToWineries = sequelize.define(
    "WineStyleToWineries",
    {
      wineryId: { type: DataTypes.INTEGER, allowNull: false },
      wineStyleId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  WineStyleToWineries.associate = function (models) {
    // associations can be defined here
  };
  return WineStyleToWineries;
};
