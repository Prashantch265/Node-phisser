const router = require("express").Router();

router.route("/instagram").get((req, res) => {
  res.status(200).render("instagram/login");
});

router.route("/github").get((req, res) => {
  res.status(200).render("github/login");
});

module.exports = router;
