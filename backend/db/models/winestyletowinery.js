"use strict";
module.exports = (sequelize, DataTypes) => {
  const WineStyleToWinery = sequelize.define(
    "WineStyleToWinery",
    {
      wineryId: { type: DataTypes.INTEGER, allowNull: false },
      wineStyleId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  WineStyleToWinery.associate = function (models) {
    // associations can be defined here
  };
  return WineStyleToWinery;
};
