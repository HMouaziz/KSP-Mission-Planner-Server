const express = require("express");
const router = express.Router();
const { getAll, getByMissionId, create, update, remove }  = require("../controllers/stagesController");


router.get("/:mission_id/stages", getByMissionId)

router.route("/stages")
  .get(getAll)
  .post(create);

router.route("/stages/:id")
  .put(update)
  .delete(remove);

module.exports = router;