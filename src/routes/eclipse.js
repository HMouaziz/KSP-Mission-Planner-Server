const express = require("express");
const router = express.Router();
const { getBodyList, calculate } = require('../controllers/eclipseController')

router.post('/calculate', calculate)

module.exports = router;