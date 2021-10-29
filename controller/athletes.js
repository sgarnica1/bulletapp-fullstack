const express = require("express");
const router = express.Router();
  

// Get all athletes
router.get("/", (req, res) => {
  res.locals.title = "Atletas";
  res.locals.stylesheetPath = "./assets/css/scss/athletes.css";
  res.locals.jsPath = "./assets/js/athletes.js";
  res.render("athletes/index");
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
