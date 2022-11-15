const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Server check OK");
});

router.use("/news", require("./news"));
router.use("/category", require("./category"));

module.exports = router;
