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
    athlete: new Athlete(),
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
  res.render("athletes/edit", {
    title: "Editar Atleta",
    stylesheetPath: "../assets/css/scss/athletes.css",
    jsPath: "../assets/js/editAthlete.js",
    athlete: res.athlete,
  });
};

// EDIT ATHLETE
const edit = async (req, res) => {
  if (req.body.firstname != null) {
    res.athlete.firstname = req.body.firstname;
  }
  if (req.body.lastname != null) {
    res.athlete.lastname = req.body.lastname;
  }
  if (req.body.email != null) {
    res.athlete.email = req.body.email;
  }
  if (req.body.phonenumber != null) {
    res.athlete.phonenumber = req.body.phonenumber;
  }
  if (req.body.plan != null) {
    res.athlete.plan = req.body.plan;
  }
  if (req.body.group != null) {
    res.athlete.group = req.body.group;
  }
  try {
    const updatedAthlete = await res.athlete.save();
    res.redirect(`/athletes`);
  } catch (error) {
    console.log(error);
  }
};

// DELETE ATHLETE
const remove = async (req, res) => {
  try {
    await res.athlete.remove();
    res.json({ redirect: "/athletes" });
  } catch (error) {
    console.log(error);
  }
};

// MIDDLEWARE
async function getAthlete(req, res, next) {
  let athlete;
  try {
    athlete = await Athlete.findById(req.params.id);
    if (athlete == null) {
      return res.status(404).render("404/index", {
        title: "Atleta no encontrado",
        stylesheetPath: "./assets/css/scss/home.css",
        jsPath: "",
      });
    }
  } catch (error) {
    return res.status(404).render("404/index", {
      title: "Atleta no encontrado",
      stylesheetPath: "./assets/css/scss/home.css",
      jsPath: "",
    });
  }

  res.athlete = athlete;
  next();
}

module.exports = {
  index,
  create_get,
  create_post,
  single,
  remove,
  edit,
  getAthlete,
};
