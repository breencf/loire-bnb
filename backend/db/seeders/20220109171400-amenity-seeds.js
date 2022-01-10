"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Amenities",
      [
        { name: "Organic",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "Biodynamic",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "Natural Winery",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "Beautiful Tasting Room",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "Spectacular Views",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "English speaking",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "Woman-led",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "Barrel Caves",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "Urban Location",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "Library Wines",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "Great for Groups",createdAt: new Date (),
        updatedAt: new Date() },
        { name: "Legendary Producer",createdAt: new Date (),
        updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Amenities", null, {});
  },
};
