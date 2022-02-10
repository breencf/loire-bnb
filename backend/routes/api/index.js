const express = require("express");
const router = express.Router();
const { User } = require("../../db/models");
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const wineryRouter = require("./winery");
const tastingRouter = require("./tasting");
const reviewsRouter = require("./review")
const mapsRouter = require("./maps")

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/wineries", wineryRouter);
router.use("/tastings", tastingRouter )
router.use("/reviews", reviewsRouter)
router.use("/maps", mapsRouter)

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
