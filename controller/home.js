const express = require("express");
const Athlete = require("../model/athlete");

const index = async (req, res) => {
  try {
    const athletes = await Athlete.find().sort({ createdAt: -1 });
    res.render("home/index", {
      title: "Home - Bullet App",
      stylesheetPath: "./assets/css/scss/home.css",
      jsPath: "./assets/js/home.js",
      athletes,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  index,
};
