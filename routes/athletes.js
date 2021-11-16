const express = require("express");
const router = express.Router();
const controller = require("../controller/athletes");

// GET ALL ATHLETES
router.get("/", controller.index);

// NEW ATHLETE FORM
router.get("/new", controller.create_get);

// ADD ATHLETE
router.post("/", controller.create_post);

// GET SINGLE ATHLETE
router.get("/:id", controller.getAthlete, controller.single);

// EDIT ATHLETE
router.patch("/:id", controller.getAthlete, controller.edit);

// DELETE ATHLETE
router.delete("/:id", controller.getAthlete, controller.remove);

module.exports = router;
