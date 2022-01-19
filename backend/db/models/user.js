const bcrypt = require("bcryptjs");
("use strict");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      passwordHash: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },
      profileImage: { type: DataTypes.TEXT },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["passwordHash", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: { attributes: { exclude: ["passwordHash"] } },
        loginUser: { attributes: {} },
      },
    }
  );

  /*^^ These scopes need to be explicitly used when querying.
  For example, User.scope('currentUser').findByPk(id)
  will find a User by the specified id and return only the User
  fields that the currentUser model scope allows. */

  User.prototype.toSafeObject = function () {
    const { id, firstName, lastName, email } = this; //context is the user instance
    return { id, firstName, lastName, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.passwordHash.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function (credential, password) {
    console.log("trying to login");
    const user = await User.scope("loginUser").findOne({
      where: { email: credential },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };

  User.signup = async function ({ firstName, lastName, email, password }) {
    const passwordHash = bcrypt.hashSync(password);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      passwordHash: passwordHash,
    });
    return await User.scope("currentUser").findByPk(newUser.id);
  };

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Winery, { foreignKey: "ownerId" });
    User.hasMany(models.Like, { foreignKey: "userId" });
    User.hasMany(models.Review, { foreignKey: "userId" });
    User.hasMany(models.Tasting, { foreignKey: "userId" });
  };
  return User;
};
