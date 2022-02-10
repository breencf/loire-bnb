const express = require("express");
const asyncHandler = require("express-async-handler");

const db = require("../../db/models");

const router = express.Router();



router.delete(
  "/:id/delete",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const exists = await db.Tasting.findOne({
      where: { id },
    });
    if (exists) {
      await db.Tasting.destroy({
        where: { id },
      });
      res.json(exists.id);
    }
  })
);

router.put(
  "/:id/",
  asyncHandler(async (req, res) => {
    const { id, userId, wineryId, date, time, numGuests } = req.body;
    const tasting = await db.Tasting.findByPk(id);
    await tasting.update({
      userId,
      wineryId,
      date,
      time,
      numGuests,
    });
    const updatedTasting = await db.Tasting.findByPk(id, {include: [db.Winery]})
    res.json(updatedTasting);
  })
);
module.exports = router;
