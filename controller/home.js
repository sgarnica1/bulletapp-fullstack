const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home/index", {
    title: "Home - Bullet App",
    stylesheetPath: "./assets/css/scss/home.css",
    jsPath: "./assets/js/home.js",
  });
});

module.exports = router;
