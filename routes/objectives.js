const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../controllers/objectivesController");

router.route("/objectives")
  .get(getAll)
  .post(create);

router.route("/objectives/:id")
  .get(getById)
  .put(update)
  .delete(remove);

module.exports = router;
