const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  update,
  remove,
} = require("../controllers/missionsController");

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", (req, res) => {
  console.log(req.body);
  return res.status(200).json({ data: "yay!" });
});

router.put("/:id", update);

router.delete("/:id", remove);

module.exports = router;
