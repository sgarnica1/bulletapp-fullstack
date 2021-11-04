const express = require("express");
const Athlete = require("../model/athlete");

// GET ALL ATHLETES
const index = async (req, res) => {
  try {
    const athletes = await Athlete.find().sort({ createdAt: -1 });
    res.render("athletes/index", {
      title: "Atletas",
      stylesheetPath: "../assets/css/scss/athletes.css",
      jsPath: "../assets/js/athletes.js",
      athletes: athletes,
    });
  } catch (error) {
    console.log(error);
  }
};

// NEW ATHLETE FORM
const create_get = (req, res) => {
  res.render("athletes/new", {
    title: "Añadir Atleta",
    stylesheetPath: "../assets/css/scss/athletes.css",
    jsPath: "../assets/js/newAthlete.js",
  });
};

// ADD ATHLETE
const create_post = async (req, res) => {
  const athlete = new Athlete(req.body);
  try {
    await athlete.save();
    res.redirect("/athletes");
  } catch (error) {
    console.log(error);
    res.render("athletes/new", {
      title: "Añadir Atleta",
      stylesheetPath: "../assets/css/scss/athletes.css",
      jsPath: "../assets/js/newAthlete.js",
    });
  }
};

// GET SINGLE ATHLETE
const single = async (req, res) => {
  const id = req.params.id;
  try {
    const athlete = await Athlete.findById(id);
    res.send(athlete);
  } catch (error) {
    res.status(404).render("404/index", {
      title: "Atleta no encontrado",
      stylesheetPath: "../assets/css/scss/home.css",
      jsPath: "",
    });
  }
};

// DELETE ATHLETE
const remove = async (req, res) => {
  const id = req.params.id;
  try {
    await Athlete.findByIdAndDelete(id);
    res.json({ redirect: "athletes" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  index,
  create_get,
  create_post,
  single,
  remove,
};
