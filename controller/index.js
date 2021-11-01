const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.locals.title = "Iniciar Sesión - Bullet App";
  res.render("index", {
    title: "Iniciar Sesión - Bullet App",
    stylesheetPath: "./assets/css/scss/login.css",
    jsPath: "./assets/js/login.js",
  });
  
});

module.exports = router;
