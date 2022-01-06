"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "breencf@gmail.com",
          username: "chris",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "eric@ericrodez.com",
          username: "ericrodez",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "marie@mariecourtin.com",
          username: "mariecourtin",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "pascal@doquet.com",
          username: "pascaldoquet",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "pierre@pierregerbais.com",
          username: "pierregerbais",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "jacques@jacqueslassaigne.com",
          username: "jacqueslassaigne",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "Users",
      {
        /*usename: {[Op.in]: ['chris', 'ericrodez', 'mariecourtin', 'pascaldoquet', 'jacqueslassaigne', 'pierregerbais']}*/
      },
      {}
    );
  },
};
