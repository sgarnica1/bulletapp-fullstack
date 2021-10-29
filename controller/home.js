const express = require("express");
const router = express.Router();

const stylesheetPath = "./assets/css/scss/home.css";
const jsPath = "./assets/js/home.js";

router.get("/", (req, res) => {
  res.locals.title = "Home - Bullet App";
  res.locals.stylesheetPath = stylesheetPath;
  res.locals.jsPath = jsPath;
  res.render("home/index");
});

module.exports = router;
