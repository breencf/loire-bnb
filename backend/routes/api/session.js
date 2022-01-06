const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();
//login
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
//logout
router.delete(
  "/",
  asyncHandler(async (_req, res) => {
    res.clearCookie("token");
    return res.json({ message: "success" });
  })
);

router.get('/', restoreUser, asyncHandler(async (req, res) => {
  const {user} = req;
  if(user) {
    return res.json({
      user: user.toSafeObject()
    })
  } else return res.json()
}))

module.exports = router;
