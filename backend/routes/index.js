const { application } = require("express");
const express = require("express");

const router = express.Router();
const apiRouter = require("./api");

router.use("/api", apiRouter);

router.get("/bonjour", function (req, res) {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Bonjour à Tout le Monde!");
});

module.exports = router;
