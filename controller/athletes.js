const express = require("express");
const router = express.Router();

// Get all athletes
router.get("/", (req, res) => {
  res.render("athletes/index", {
    title: "Atletas",
    stylesheetPath: "./assets/css/scss/athletes.css",
    jsPath: "./assets/js/athletes.js",
  });
});

// New athlete
router.get("/new", (req, res) => {
  res.locals.title = "Añadir Atleta";
  res.locals.stylesheetPath = "../assets/css/scss/athletes.css";
  res.locals.jsPath = "../assets/js/newAthlete.js";
  res.render("athletes/new");
});

// Add new athlete
router.post("/new", (req, res) => {
  res.send(req.body);
});

module.exports = router;
