const bcrypt = require("bcryptjs");
("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    Example: return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "didier@dagueneau.com",
          firstName: "Didier",
          lastName: "Dagueneau",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "Nicolas@joly.com",
          firstName: "Nicolas",
          lastName: "Joly",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "Pascal@cotat.com",
          firstName: "Pascal",
          lastName: "Cotat",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "Agnes@mosse.com",
          firstName: "Agnes and Rene",
          lastName: "Mosse",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "Jo@landron.com",
          firstName: "Jo",
          lastName: "Landron",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "Jeremie@huchet.com",
          firstName: "Jeremie",
          lastName: "Huchet",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "brendan@staterwest.com",
          firstName: "Brendan",
          lastName: "Stater-West",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "arnaud@lambert.com",
          firstName: "Arnaud",
          lastName: "Lambert",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "patrick@baudoin.com",
          firstName: "Patrick",
          lastName: "Baudouin",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "sylvain@dittiere.com",
          firstName: "Sylvain",
          lastName: "Dittiere",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "charly@foucault.com",
          firstName: "Charly and Nady",
          lastName: "Foucault",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jerome@bretaudeau.com",
          firstName: "Jerome",
          lastName: "Bretaudeau",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "gaston@huet.com",
          firstName: "Gaston",
          lastName: "Huet",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "philippe@tessier.com",
          firstName: "Philippe",
          lastName: "Tessier",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "francois@chidaine.com",
          firstName: "Francois",
          lastName: "Chidaine",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "fred@niger.com",
          firstName: "Fred",
          lastName: "Niger",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "denis@barbara.com",
          firstName: "Denis",
          lastName: "Barbara",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "roman@guibertau.com",
          firstName: "Romain",
          lastName: "Guibertau",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "francois@saintlo.com",
          firstName: "François",
          lastName: "Saint-Lô",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "damien@delecheneau.com",
          firstName: "Damien",
          lastName: "Delecheneau",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "olga@raffault.com",
          firstName: "Olga",
          lastName: "Raffault",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "herve@villemade.com",
          firstName: "Herve",
          lastName: "Villemade",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "michel@chevre.com",
          firstName: "Michel",
          lastName: "Chevré",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "charles@joguet.com",
          firstName: "Charles",
          lastName: "Joguet",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "marie@thibault.com",
          firstName: "Marie",
          lastName: "Thibault",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "lise@jousset.com",
          firstName: "Lise & Bertrand",
          lastName: "Jousset",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "eddy@oosterlinck.com",
          firstName: "Eddy",
          lastName: "Oosterlinck",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "noella@morantin.com",
          firstName: "Noella",
          lastName: "Morantin",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jacky@blot.com",
          firstName: "Jacky",
          lastName: "Blot",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "frantz@saumon.com",
          firstName: "Frantz",
          lastName: "Saumon",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "sebastien@riffault.com",
          firstName: "Sebastien",
          lastName: "Riffault",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jeandominique@vacheron.com",
          firstName: "Jean-Dominique",
          lastName: "Vacheron",
          profileImage: "",
          passwordHash: bcrypt.hashSync("password"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //   {
        //     email: "",
        //     firstName: "",
        //     lastName: "",
        //     profileImage: "",
        //     passwordHash: bcrypt.hashSync("password"),
        //   },
        //   {
        //     email: "",
        //     firstName: "",
        //     lastName: "",
        //     profileImage: "",
        //     passwordHash: bcrypt.hashSync("password"),
        //   },
        //   {
        //     email: "",
        //     firstName: "",
        //     lastName: "",
        //     profileImage: "",
        //     passwordHash: bcrypt.hashSync("password"),
        //   },
        //   {
        //     email: "",
        //     firstName: "",
        //     lastName: "",
        //     profileImage: "",
        //     passwordHash: bcrypt.hashSync("password"),
        //   },
        //   {
        //     email: "",
        //     firstName: "",
        //     lastName: "",
        //     profileImage: "",
        //     passwordHash: bcrypt.hashSync("password"),
        //   },
        //   {
        //     email: "",
        //     firstName: "",
        //     lastName: "",
        //     profileImage: "",
        //     passwordHash: bcrypt.hashSync("password"),
        //   },
        //   {
        //     email: "",
        //     firstName: "",
        //     lastName: "",
        //     profileImage: "",
        //     passwordHash: bcrypt.hashSync("password"),
        //   },
        //   {
        //     email: "",
        //     firstName: "",
        //     lastName: "",
        //     profileImage: "",
        //     passwordHash: bcrypt.hashSync("password"),
        //   }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};