const express = require("express");
const asyncHandler = require("express-async-handler");

const db = require("../../db/models");

const router = express.Router();

router.post(
  "/wineries/:id/like",
  asyncHandler(async (req, res) => {
    console.log("in the post");
    const exists = await db.Like.findOne({ where: { storyId, userId } });
    if (exists) {
      await db.Like.destroy({ where: { storyId, userId } });
      res.json({ message: "unlike" });
    } else {
      await db.Like.create({ storyId, userId });
      res.json({ message: "like" });
    }
  })
);

module.exports = router;
