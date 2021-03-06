const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
const db = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email"),
  check("firstName")
    .exists({ checkFalsy: true })
    .isLength({ min: 3 })
    .withMessage(
      "Please provide a first name that is at least 3 characters long"
    ),
  check("lastName")
    .exists({ checkFalsy: true })
    .isLength({ min: 3 })
    .withMessage(
      "Please provide a last name that is at least 3 characters long"
    ),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  handleValidationErrors,
];

router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.signup({ firstName, lastName, email, password });
    await setTokenCookie(res, user);
    return res.json(user);
  })
);

router.get(
  "/:id/likes",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const likes = await db.Like.findAll({ where: { userId: id } });
    return res.json(likes);
  })
);

router.get(
  "/:id/tastings",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const tastings = await db.Tasting.findAll({ where: { userId: id }, include:[db.Winery] });
    return res.json(tastings);
  })
);
module.exports = router;
