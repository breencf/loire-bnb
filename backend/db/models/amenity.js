"use strict";
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define(
    "Amenity",
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Amenity.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "AmenityToWinery", //joinTable
      otherKey: "wineryId", //join other key
      foreignKey: "amenityId", //join key that references this
    };
    Amenity.belongsToMany(models.Winery, columnMapping);
  };
  return Amenity;
};
