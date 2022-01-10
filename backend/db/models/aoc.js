"use strict";
module.exports = (sequelize, DataTypes) => {
  const AOC = sequelize.define(
    "AOC",
    {
      name: { type: DataTypes.STRING, allowNull:false },
    },
    {}
  );
  AOC.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "AOCToWinery", //joinTable
      otherKey: "wineryId", //join other key
      foreignKey: "AOCId", //join key that references this
    };
    AOC.belongsToMany(models.Winery, columnMapping);
  };
  return AOC;
};
