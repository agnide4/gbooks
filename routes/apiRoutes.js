const router = require("express").Router();
const controller = require("../controllers/controller");
const db = require("../models")

// Uses generic api route "/api/books"
router.route("/books")
  .get(controller.findAll)
  .post(controller.save);



  // checks for id on route "/api/books/:id"
router.route("/books/:id")
  .delete(controller.delete);

module.exports = router;
