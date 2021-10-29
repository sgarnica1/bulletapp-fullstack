if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
port = 3000;
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

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}`);
});
