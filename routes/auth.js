const express = require('express');
const router = express.Router();
const {verifyAuthRequest} = require("../auth/authMiddleware");
const {registerUser, loginUser, logoutUser, getPublicKey} = require("../controllers/authController");
const {getSecretKey} = require("../auth/authUtils");

router.post('/signup', verifyAuthRequest, registerUser);
router.post('/login', verifyAuthRequest, loginUser);
router.post('/logout', logoutUser);
router.get('/public-key', getPublicKey);
router.get('/secret', getSecretKey)

module.exports = router;