const express = require("express")
const router = express.Router();
const controller = require("../controllers/controller");
const db = require("../models/index")

// Uses generic api route "/api/books"
router.route("/books")
  .get(controller.findAll)

  router.route("/books/")
     .post(controller.save);



  // checks for id on route "/api/books/:id"
router.route("/books/:id")
  .delete(controller.delete);

module.exports = router;
