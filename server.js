if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
port = 4000;
app.use(express.json());

// ROUTES
const indexRouter = require("./controller/index");
const homeRouter = require("./controller/home");
const athletesRouter = require("./controller/athletes");

// SET VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views/");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

// USE ROUTES
app.use("/", indexRouter);
app.use("/home", homeRouter);
app.use("/athletes", athletesRouter);

// 404 Error
app.use((req, res) => {
  res.locals.title = "Error 404";
  res.locals.stylesheetPath = "./assets/css/scss/home.css";
  res.locals.jsPath = "./assets/js/home.js";
  res.status(404).render("404/index");
});

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}`);
});
