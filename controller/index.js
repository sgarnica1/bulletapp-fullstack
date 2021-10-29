const express = require("express");
const router = express.Router();

const stylesheetPath = "./assets/css/scss/login.css";
const jsPath = "./assets/js/login.js";

router.get("/", (req, res) => {
  res.locals.title = "Iniciar Sesión - Bullet App";
  res.locals.stylesheetPath = stylesheetPath;
  res.locals.jsPath = jsPath;
  res.render("index");
});

module.exports = router;
