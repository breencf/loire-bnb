"use strict";
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "Region",
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Region.associate = function (models) {
    // associations can be defined here
    Region.hasMany(models.Winery, { foreignKey: "regionId" });
  };
  return Region;
};
