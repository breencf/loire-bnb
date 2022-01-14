"use strict";
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "Like",
    {
      wineryId: { type: DataTypes.INTEGER, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.Winery, { foreignKey: "wineryId" });
    Like.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Like;
};
