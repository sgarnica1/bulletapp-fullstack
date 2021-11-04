const express = require("express");

const index = (req, res) => {
  res.render("index", {
    title: "Iniciar Sesión - Bullet App",
    stylesheetPath: "./assets/css/scss/login.css",
    jsPath: "./assets/js/login.js",
  });
};

module.exports = {
  index,
};
