if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

// ROUTES
const indexRouter = require("./routes/index");
const homeRouter = require("./routes/home");
const athletesRouter = require("./routes/athletes");

// SET VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views/");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// DATABASE
const mongoose = require("mongoose");
const db = mongoose.connect(process.env.DATABASE_URL);
db.then((res) =>
  app.listen(process.env.PORT || port, () => console.log("Connected"))
);
db.catch((err) => console.log(err));

// ROUTES
app.use("/", indexRouter);
app.use("/home", homeRouter);
app.use("/athletes", athletesRouter);

// 404 ERROR
app.use((req, res) => {
  res.locals.title = "Error 404";
  res.locals.stylesheetPath = "../assets/css/scss/home.css";
  res.locals.jsPath = "../assets/js/home.js";
  res.status(404).render("404/index");
});
