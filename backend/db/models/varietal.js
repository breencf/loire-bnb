"use strict";
module.exports = (sequelize, DataTypes) => {
  const Varietal = sequelize.define(
    "Varietal",
    {
      type: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Varietal.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "VarietalToWineries", //joinTable
      otherKey: "wineryId", //join other key
      foreignKey: "varietalId", //join key that references this
    };
    Varietal.belongsToMany(models.Winery, columnMapping);
  };
  return Varietal;
};
