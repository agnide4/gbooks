const router = require("express").Router();
const controller = require("../controllers/controller");

// Uses generic api route "/api/books"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);



  // checks for id on route "/api/books/:id"
router.route("/:id")
  .delete(controller.remove);

module.exports = router;
