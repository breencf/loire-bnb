const router = require("express").Router();
const dayjs = require("dayjs");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Op } = require("sequelize");
const db = require("../../db/models");

const validateWinery = [
  check("ownerId").exists({ checkFalsy: true }).notEmpty(),
  check("name").exists({ checkFalsy: true }).notEmpty().isLength({ min: 3 }),
  check("content").exists({ checkFalsy: true }).notEmpty(),
  check("lat").exists({ checkFalsy: true }).notEmpty(),
  check("long").exists({ checkFalsy: true }).notEmpty(),
  check("address").exists({ checkFalsy: true }).notEmpty(),
  check("town").exists({ checkFalsy: true }).notEmpty(),
  check("maxGuests").exists({ checkFalsy: true }).notEmpty().isInt(),
  check("regionId").exists({ checkFalsy: true }).notEmpty(),
  handleValidationErrors,
];

const validateTasting = [check("date")];

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const wineries = await db.Winery.findAll({
      include: [
        db.Region,
        db.Image,
        db.Varietal,
        db.WineStyle,
        db.User,
        db.Review,
        db.Amenity,
      ],
    });
    res.json(wineries);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const winery = await db.Winery.findByPk(parseInt(id), {
      include: [
        db.Region,
        db.Image,
        db.Varietal,
        db.WineStyle,
        db.User,
        db.Review,
        db.Amenity,
      ],
    });
    res.json(winery);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const {
      id,
      name,
      content,
      ownerId,
      lat,
      long,
      address,
      town,
      maxGuests,
      regionId,
      varietals,
      wineStyles,
      amenities,
      images,
    } = req.body;

    const winery = await db.Winery.findByPk(id);
    await winery.update({
      name,
      content,
      lat,
      long,
      address,
      town,
      maxGuests,
      regionId,
      ownerId,
    });

    /************Varietals*********************** */
    let varietalsKeepArray = [];
    varietals.forEach((obj) => varietalsKeepArray.push(obj.value));

    for (const i in varietalsKeepArray) {
      const exists = await db.VarietalToWineries.findOne({
        where: { wineryId: id, varietalId: varietalsKeepArray[i] },
      });
      if (!exists) {
        await db.VarietalToWineries.create({
          wineryId: id,
          varietalId: varietalsKeepArray[i],
        });
      }
    }
    await db.VarietalToWineries.destroy({
      where: {
        varietalId: {
          [Op.notIn]: varietalsKeepArray,
        },
      },
    });

    /************Styles*********************** */
    let stylesKeepArray = [];
    wineStyles.forEach((obj) => stylesKeepArray.push(obj.value));

    for (const i in stylesKeepArray) {
      const exists = await db.WineStyleToWineries.findOne({
        where: { wineryId: id, wineStyleId: stylesKeepArray[i] },
      });
      if (!exists) {
        await db.WineStyleToWineries.create({
          wineryId: id,
          wineStyleId: stylesKeepArray[i],
        });
      }
    }
    await db.WineStyleToWineries.destroy({
      where: {
        wineStyleId: {
          [Op.notIn]: stylesKeepArray,
        },
      },
    });

    /************Amenities*********************** */
    let amenityKeepArray = [];
    amenities.forEach((obj) => amenityKeepArray.push(obj.value));

    for (const i in amenityKeepArray) {
      const exists = await db.AmenityToWineries.findOne({
        where: { wineryId: id, amenityId: amenityKeepArray[i] },
      });
      if (!exists) {
        await db.AmenityToWineries.create({
          wineryId: id,
          amenityId: amenityKeepArray[i],
        });
      }
    }

    await db.AmenityToWineries.destroy({
      where: {
        amenityId: {
          [Op.notIn]: amenityKeepArray,
        },
      },
    });

    /********* */

    await db.Image.destroy({ where: { wineryId: id } });
    for (const i in images) {
      await db.Image.create({ imageURL: images[i], wineryId: id });
    }

    const updatedWineryToReturn = await db.Winery.findByPk(parseInt(id), {
      include: [
        db.Region,
        db.Image,
        db.Varietal,
        db.WineStyle,
        db.User,
        db.Review,
        db.Amenity,
      ],
    });

    res.json(updatedWineryToReturn);
  })
);

router.post(
  "/",
  requireAuth,
  validateWinery,
  asyncHandler(async (req, res, next) => {
    const {
      name,
      content,
      ownerId,
      lat,
      long,
      address,
      town,
      maxGuests,
      regionId,
      varietals,
      wineStyles,
      amenities,
      images
    } = req.body;

    const winery = await db.Winery.create({
      name,
      content,
      lat,
      long,
      address,
      town,
      maxGuests,
      regionId,
      ownerId,
    });

    for (const varietalObj of varietals) {
      await db.VarietalToWineries.create({
        wineryId: winery.id,
        varietalId: varietalObj.value,
      });
    }
    for (const styleObj of wineStyles) {
      await db.WineStyleToWineries.create({
        wineryId: winery.id,
        wineStyleId: styleObj.value,
      });
    }
    for (const amenityObj of amenities) {
      await db.AmenityToWineries.create({
        wineryId: winery.id,
        amenityId: amenityObj.value,
      });
    }

    console.log(images)
    for (const imgURL of images) {
      await db.Image.create({
        wineryId: winery.id,
        imageURL: imgURL,
      });
    }

    const newWineryToReturn = await db.Winery.findByPk(winery.id, {
      include: [
        db.Region,
        db.Image,
        db.Varietal,
        db.WineStyle,
        db.User,
        db.Review,
        db.Amenity,
      ],
    });

    res.json(newWineryToReturn);
  })
);

// router.post("/:id/images", asyncHandler(async (req, res) => {
//   const imageURLs = req.body
//   const wineryId = req.params.id
//   for (const imgURL of imageURLs) {
//     console.log(imgURL)
//     await db.Image.create({
//       wineryId,
//       imageURL: imgURL,
//     });
//   }
// const images = await db.Image.findAll({where: {wineryId}})
// res.json({images, wineryId})
// }))

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const winery = await db.Winery.findByPk(req.params.id);
    if (!winery) {
      throw new Error("Unable to delete listing.");
    }
    await db.Image.destroy({ where: { wineryId: winery.id } });
    await db.VarietalToWineries.destroy({ where: { wineryId: winery.id } });
    await db.WineStyleToWineries.destroy({ where: { wineryId: winery.id } });
    await db.Review.destroy({ where: { wineryId: winery.id } });
    await db.AmenityToWineries.destroy({ where: { wineryId: winery.id } });
    await winery.destroy();
    return res.json(req.params.id);
  })
);

router.post(
  "/:id/like",
  asyncHandler(async (req, res) => {
    const { userId, winery } = req.body;
    const exists = await db.Like.findOne({
      where: { wineryId: winery, userId },
    });
    if (exists) {
      await db.Like.destroy({ where: { wineryId: winery, userId } });
      res.json({ message: "unlike" });
    } else {
      await db.Like.create({ wineryId: winery, userId });
      res.json({ message: "like" });
    }
  })
);

router.post(
  "/:id/book",
  asyncHandler(async (req, res) => {
    const { userId, wineryId, date, numGuests, time } = req.body;
    const exists = await db.Tasting.findOne({
      where: { wineryId: +wineryId, date, time },
    });
    if (!exists) {
      const tasting = await db.Tasting.create({
        userId,
        wineryId: +wineryId,
        date,
        numGuests,
        time,
      });
      const newTasting = await db.Tasting.findByPk(tasting.id, {
        include: [db.Winery],
      });
      res.json(newTasting);
    } else {
      res.json("Please select another time");
    }
  })
);

router.get(
  "/:id/reviews",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await db.Review.findAll({
      where: { wineryId: id },
      include: [db.User],
    });
    res.json(reviews);
  })
);

router.post(
  "/:id/reviews",
  asyncHandler(async (req, res) => {
    const { userId, wineryId, rating, content } = req.body;
    const review = await db.Review.create({
      userId,
      wineryId,
      rating,
      content,
    });

    const newReview = await db.Review.findByPk(review.id, {
      include: [db.User],
    });
    res.json(newReview);
  })
);

router.get(
  "/:id/tastings/:date",
  asyncHandler(async (req, res) => {
    const { id, date } = req.params;
    const existingTastings = await db.Tasting.findAll({
      where: { wineryId: +id, date },
    });

    const staticTimeList = [
      { label: "11:00" },
      { label: "13:00" },
      { label: "14:00" },
      { label: "15:00" },
      { label: "16:00" },
      { label: "17:00" },
    ];

    const bookedTimes = [];
    existingTastings.forEach((tastingObj) => bookedTimes.push(tastingObj.time));

    const availableTimes = staticTimeList.filter((timeObj) =>
      !bookedTimes.includes(timeObj.label)
    );
    res.json(availableTimes);
  })
);

module.exports = router;
