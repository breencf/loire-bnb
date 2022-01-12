"use strict";
module.exports = (sequelize, DataTypes) => {
  const WineStyle = sequelize.define(
    "WineStyle",
    {
      type: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  WineStyle.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "WineStyleToWineries", //joinTable
      otherKey: "wineryId", //join other key
      foreignKey: "wineStyleId", //join key that references this
    };
    WineStyle.belongsToMany(models.Winery, columnMapping);
  };
  return WineStyle;
};
