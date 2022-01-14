"use strict";
module.exports = (sequelize, DataTypes) => {
  const Winery = sequelize.define(
    "Winery",
    {
      ownerId: { type: DataTypes.INTEGER, allowNull: false },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 300],
        },
      },
      content: { type: DataTypes.TEXT, allowNull: false },
      lat: {
        type: DataTypes.DECIMAL,
        // allowNull: false,
      },
      long: {
        type: DataTypes.DECIMAL,
        // allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   len: [3, 256],
        // },
      },
      town: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 300],
        },
      },
      maxGuests: { type: DataTypes.INTEGER, allowNull: false },
      regionId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Winery.associate = function (models) {
    // associations can be defined here
    Winery.hasMany(models.Image, { foreignKey: "wineryId" });
    Winery.belongsTo(models.User, { foreignKey: "ownerId" });
    Winery.belongsTo(models.Region, { foreignKey: "regionId" });
    Winery.hasMany(models.Like, { foreignKey: "wineryId" });

    const wineStyleColumnMapping = {
      through: "WineStyleToWineries", //joinTable
      otherKey: "wineStyleId", //join other key
      foreignKey: "wineryId", //join key that references this
    };
    Winery.belongsToMany(models.WineStyle, wineStyleColumnMapping);

    const AOCColumnMapping = {
      through: "AOCToWinery", //joinTable
      otherKey: "AOCId", //join other key
      foreignKey: "wineryId", //join key that references this
    };
    Winery.belongsToMany(models.AOC, AOCColumnMapping);

    const amenityColumnMapping = {
      through: "AmenityToWinery", //joinTable
      otherKey: "amenityId", //join other key
      foreignKey: "wineryId", //join key that references this
    };
    Winery.belongsToMany(models.Amenity, amenityColumnMapping);

    const varietalColumnMapping = {
      through: "VarietalToWineries", //joinTable
      otherKey: "varietalId", //join other key
      foreignKey: "wineryId", //join key that references this
    };
    Winery.belongsToMany(models.Varietal, varietalColumnMapping);
  };
  return Winery;
};
