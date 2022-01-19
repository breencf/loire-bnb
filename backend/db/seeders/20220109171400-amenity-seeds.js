"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Amenities",
      [
        {
          name: "Organic",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631719/loirebnb%20assets/icons%20amenities/noun-organic-3569353_rex0s6.png",
        },
        {
          name: "Biodynamic",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631719/loirebnb%20assets/icons%20amenities/noun-full-moon-139157_wk4jqq.png",
        },
        {
          name: "Natural Winery",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631720/loirebnb%20assets/icons%20amenities/noun-grapes-3683904_qns4tg.png",
        },
        {
          name: "Beautiful Tasting Room",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631720/loirebnb%20assets/icons%20amenities/noun-wine-1069639_msgxij.png",
        },
        {
          name: "Spectacular Views",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631719/loirebnb%20assets/icons%20amenities/noun-view-1800643_yldpfj.png",
        },
        {
          name: "English speaking",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631720/loirebnb%20assets/icons%20amenities/noun-english-1044185_w6hrmi.png",
        },
        {
          name: "Woman-led",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631720/loirebnb%20assets/icons%20amenities/noun-female-887261_p2zhgp.png",
        },
        {
          name: "Barrel Caves",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631720/loirebnb%20assets/icons%20amenities/noun-barrel-4509003_asubqq.png",
        },
        {
          name: "Urban Location",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631719/loirebnb%20assets/icons%20amenities/noun-urban-2009630_yhvzeq.png",
        },
        {
          name: "Library Wines",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631720/loirebnb%20assets/icons%20amenities/noun-wine-1416642_ouih1n.png",
        },
        {
          name: "Great for Groups",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631719/loirebnb%20assets/icons%20amenities/noun-group-1888021_f30jc9.png",
        },
        {
          name: "Legendary Producer",
          createdAt: new Date(),
          updatedAt: new Date(),
          icon: "https://res.cloudinary.com/jadecabbage/image/upload/v1642631719/loirebnb%20assets/icons%20amenities/noun-famous-2969237_ijligc.png",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Amenities", null, {});
  },
};
