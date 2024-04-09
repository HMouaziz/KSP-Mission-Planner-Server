const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../controllers/missionsController");
const {getByMissionId: getObjectivesByMissionId} = require("../controllers/objectivesController");
const {getByMissionId: getStagesByMissionId} = require("../controllers/stagesController");

router.route("/")
  .get(getAll)
  .post(create);

router.route("/:id")
  .get(getById)
  .put(update)
  .delete(remove);

router.get("/:mission_id/objectives", getObjectivesByMissionId);
router.get("/:mission_id/stages", getStagesByMissionId)

module.exports = router;
