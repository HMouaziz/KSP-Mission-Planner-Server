const express = require("express");
const router = express.Router();
const { getAll, getById, create, update, remove }  = require("../controllers/stagesController");

const {verifyRequest} = require("../middleware/authMiddleware");

router.use(verifyRequest)

router.route("/stages")
  .get(getAll)
  .post(create);

router.route("/stages/:id")
  .get(getById)
  .put(update)
  .delete(remove);

module.exports = router;