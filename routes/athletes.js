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
router.get("/:id", controller.single);

// DELETE ATHLETE
router.delete("/:id", controller.remove);

module.exports = router;
