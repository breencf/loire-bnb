const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email"),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage(
      "Please provide a username that is at least 4 characters long"
    ),
  check("username").not().isEmail().withMessage("Username cannot be an email"),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
    handleValidationErrors
];

router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const user = await User.signup({ username, email, password });

    await setTokenCookie(res, user);
    return res.json({ user });
  })
);

module.exports = router;
