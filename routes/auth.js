const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {verifyRequest} = require("../auth/authMiddleware");
const {getPublicKey} = require("../auth/authUtils");

router.post('/signup', verifyRequest, userController.register);
router.post('/login', verifyRequest, userController.login);
router.post('/logout', userController.logout);
router.get('/public-key', getPublicKey);

module.exports = router;