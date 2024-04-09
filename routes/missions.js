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

// Standard routes
router.route("/")
  .get(getAll)
  .post(create);

router.route("/:id")
  .get(getById)
  .put(update)
  .delete(remove);

// Property routes
router.get("/:mission_id/objectives", getObjectivesByMissionId);
router.get("/:mission_id/stages", getStagesByMissionId)

module.exports = router;
