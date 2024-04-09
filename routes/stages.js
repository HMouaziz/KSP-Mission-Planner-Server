const express = require("express");
const router = express.Router();
const { getAll, getById, create, update, remove }  = require("../controllers/stagesController");


router.route("/stages")
  .get(getAll)
  .post(create);

router.route("/stages/:id")
  .get(getById)
  .put(update)
  .delete(remove);

module.exports = router;