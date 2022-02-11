"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          wineryId: 2,
          rating: 5,
          content:
            "My friends and I had a lovely time tasting with Nicolas. The Coulee de Serrant vineyard is indeed one of the most special in the world, as evidenced by the wines we tasted and the expertise Nicolas displayed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          wineryId: 2,
          rating: 2,
          content:
            "I was very disappointed as this winery only makes white wines, while my husband and I wouldn't dare drink anything but full bodied reds. Preposterous!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          wineryId: 17,
          rating: 3,
          content:
            "Our server was fantastic, we loved the wines. tell all your friends!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          wineryId: 5,
          rating: 5,
          content: "Had a lovely time -- would highly recommend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          wineryId: 21,
          rating: 5,
          content: "Learned so much about winemaking!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          wineryId: 14,
          rating: 5,
          content:
            "It is really so weird that this random dutchman makes such incredible chenin? but we had a fantastic time, and loved the botrytized wines.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          wineryId: 6,
          rating: 2,
          content:
            "Denis was so very nice, and the story of how he came to own his winery really is extraordinary. The wines are great value, even if the labels are kooky",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          wineryId: 17,
          rating: 3,
          content:
            "These are some big and bruising examples of Cabernet Franc. It was great to taste the lineup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          wineryId: 7,
          rating: 5,
          content: "as a Domaine Huet fan (#huethive!) it was incredible to visit the property and learn about this legendary domaine so up close and personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          wineryId: 8,
          rating: 5,
          content: "So chill... I've been drinking these wines at The Ten Bells for as long as I can rememeber, super cool to taste their diverse lineup of wines",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          wineryId: 9,
          rating: 5,
          content:
            "To those who say that Muscadet is lame or not worth your time, or that it is not a terroir driven wine, or a region capable of producing incredible wines, I suggest you pay Jerome a visit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 18,
          wineryId: 10,
          rating: 2,
          content:
            "I took my mom here because she's a big Sauvignon Blanc drinker, and loves Sancerre in particular, but dang these were weird wines. I don't think she liked them very much",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 20,
          wineryId: 11,
          rating: 3,
          content:
            "Age-worthy mind blowing Sauvignon Blanc. Who would have thunk it? ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          wineryId: 12,
          rating: 5,
          content: "Classy and sophisiticated Sancerre Rouge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          wineryId: 21,
          rating: 5,
          content: "Romain has as much character as his wines!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          wineryId: 14,
          rating: 5,
          content:
            "We had lunch provided by the winemaker's wife -- it was delicious!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 23,
          wineryId: 18,
          rating: 2,
          content:
            "Hervé's Cheverny Blanc has such great weight while still being finesse driven. A class act.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 22,
          wineryId: 20,
          rating: 3,
          content:
            "This winery is run by the daughter of the former owners of the L E G E N D A R Y Clos Rougeard. Talk about a well kept secret!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 21,
          wineryId: 1,
          rating: 5,
          content: "WHOA is all. Can't believe I was able to taste here",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 19,
          wineryId: 1,
          rating: 2,
          content: "They were a bit standoffish, maybe because it's legendary, but still I would have liked better service.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 18,
          wineryId: 1,
          rating: 5,
          content:
            "It is nigh on impossible to find these wines where I live, so the ability to finally taste the wines at the winery felt like a pilgrimage fulfilled.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          wineryId: 23,
          rating: 4,
          content:
            "Emily in Paris? Try Brendan in Saumur! So very cool to hear the story of how he ended up making wine in France",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          wineryId: 11,
          rating: 3,
          content:
            "I do much prefer the wines of his brother",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          wineryId: 14,
          rating: 5,
          content: "Under the radar, but felt so welcomed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          wineryId: 16,
          rating: 5,
          content: "Wanted to learn what Muscadet was all about. Needless to say we were impressed.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
