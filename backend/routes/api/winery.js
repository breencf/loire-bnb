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
];

//get 5 wineries

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const wineries = await db.Winery.findAll({
      include: [db.Region, db.Image, db.Varietal /*db.WineStyle*/],
      limit: 10,
    });
    res.json(wineries);
  })
);

router.get('/create', asyncHandler(async (req, res, next) => {
  const wineStyles = await db.WineStyle.findAll()
  const varietals = await db.Varietal.findAll()
  const regions = await db.Region.findAll()

  res.json({wineStyles, varietals, regions})
}))

//router.get(create form, pass in regions, styles, etc to be used on front end form rendering )
//create a winery
router.post(
  "/",
  validateWinery,
  asyncHandler(async (req, res, next) => {
    const winery = await Winery.create(req.body);
    res.json(winery);
  })
);

//get a winery by id
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {})
);

module.exports = router;
