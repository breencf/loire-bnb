const express = require("express");
const asyncHandler = require("express-async-handler");

const db = require("../../db/models");

const router = express.Router();

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const exists = await db.Review.findOne({
      where: { id },
    });
    if (exists) {
      await db.Review.destroy({
        where: { id },
      });
      res.json(exists.id);
    }
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id, userId, wineryId, content, rating } = req.body;
    const review = await db.Review.findByPk(id);
    const updatedReview = await review.update({
      userId,
      wineryId,
      content,
      rating,
    });
    const newReview = await db.Review.findByPk(updatedReview.id, {
      include: [db.User],
    });
    res.json(newReview);

  })
);
module.exports = router;
