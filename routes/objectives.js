const express = require("express");
const router = express.Router();
const {
  getAll,
  getByMissionId,
  create,
  update,
  remove,
} = require("../controllers/objectivesController");

router.get("/:mission_id/objectives", getByMissionId);

router.route("/objectives")
  .get(getAll)
  .post(create);

router.route("/objectives/:id")
  .put(update)
  .delete(remove);

module.exports = router;
