'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    wineryId:{type: DataTypes.INTEGER,
      allowNull: false,},
    imageURL:{type: DataTypes.TEXT,
      allowNull:false
  }, }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Winery, {foreignKey:"wineryId"})
  };
  return Image;
};
