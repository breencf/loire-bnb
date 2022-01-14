const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
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

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    console.log("getting wineries");
    const wineries = await db.Winery.findAll({
      include: [db.Region, db.Image, db.Varietal, db.WineStyle, db.User],
    });
    res.json(wineries);
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

    let varietalsToBeDeleted = [];
    const oldVarietals = await db.VarietalToWineries.findAll({
      where: { wineryId: id },
    });
    oldVarietals.forEach((entry) => {
      if (!varietals.includes(entry.varietalId)) {
        varietalsToBeDeleted.push(entry.varietalId);
      }
    });
    for (const varietalObj of varietals) {
      const existing = await db.VarietalToWineries.findOne({
        where: { wineryId: id, varietalId: varietalObj.value },
      });
      if (!existing) {
        await db.VarietalToWineries.create({
          wineryId: id,
          varietalId: varietalObj.value,
        });
      }
    }
    for (const i in varietalsToBeDeleted) {
      await db.VarietalToWineries.destroy({
        where: { wineryId: id, varietalId: varietalsToBeDeleted[i] },
      });
    }

    /*********** */
    let stylesToBeDeleted = [];
    const oldStyles = await db.WineStyleToWineries.findAll({
      where: { wineryId: id },
    });
    oldStyles.forEach((entry) => {
      if (!wineStyles.includes(entry.wineStyleId)) {
        stylesToBeDeleted.push(entry.wineStyleId);
      }
    });
    for (const styleObj of wineStyles) {
      const existing = await db.WineStyleToWineries.findOne({
        where: { wineryId: id, wineStyleId: styleObj.value },
      });
      if (!existing) {
        await db.WineStyleToWineries.create({
          wineryId: id,
          wineStyleId: styleObj.value,
        });
      }
    }
    for (const i in stylesToBeDeleted) {
      await db.WineStyleToWineries.destroy({
        where: { wineryId: id, wineStyleId: stylesToBeDeleted[i] },
      });
    }
    /********* */
    await db.Image.destroy({ where: { wineryId: id } });
    for (const i in images) {
      await db.Image.create({ imageURL: images[i], wineryId: id });
    }
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
      images,
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
    for (const imgURL of images) {
      await db.Image.create({
        wineryId: winery.id,
        imageURL: imgURL,
      });
    }
    return res.json({ winery });
  })
);

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
    await winery.destroy();
    return res.json("success");
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
      console.log("unlike");
      res.json({ message: "unlike" });
    } else {
      await db.Like.create({ wineryId: winery, userId });
      console.log("like");
      res.json({ message: "like" });
    }
  })
);

module.exports = router;
