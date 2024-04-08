const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  update,
  remove,
  create
} = require("../controllers/missionsController");

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", create)

router.put("/:id", update);

router.delete("/:id", remove);

module.exports = router;
