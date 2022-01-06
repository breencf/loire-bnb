const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login(credential, password);

    if (!user) {
      const e = new Error("Login Failed");
      e.status = 401;
      e.title = "Login Failed";
      e.errors = ["The provided credentials were invalid"];
      return next(e);
    }

    await setTokenCookie(res, user);
    return res.json({ user });
  })
);
module.exports = router;
