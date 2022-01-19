'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasting = sequelize.define('Tasting', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    wineryId: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    numGuests: { type: DataTypes.INTEGER, allowNull: false }
  }, {});
  Tasting.associate = function(models) {
    // associations can be defined here
    Tasting.belongsTo(models.User, {foreignKey: "userId"})
    Tasting.belongsTo(models.Winery, {foreignKey: "wineryId"})
  };
  return Tasting;
};
