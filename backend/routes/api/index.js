const express = require("express");
const router = express.Router();
const { User } = require("../../db/models");
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const wineryRouter = require("./winery");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/wineries", wineryRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
