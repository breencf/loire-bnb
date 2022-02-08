"use strict";
module.exports = (sequelize, DataTypes) => {
  const AmenityToWineries = sequelize.define(
    "AmenityToWineries",
    {
      wineryId: { type: DataTypes.INTEGER, allowNull: false },
      amenityId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  AmenityToWineries.associate = function (models) {
    // associations can be defined here
  };
  return AmenityToWineries;
};
