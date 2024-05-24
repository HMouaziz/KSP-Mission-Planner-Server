const express = require("express");
const router = express.Router();
const { verifyAuthRequest, verifyRequest} = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  logoutUser,
  getPublicKey,
  getHMACKey,
  gracefulVerify,
} = require("../controllers/authController");

router.post("/signup", verifyAuthRequest, registerUser);
router.post("/login", verifyAuthRequest, loginUser);
router.post("/logout", logoutUser);
router.get("/public-key", getPublicKey);
router.get("/secret", getHMACKey);
router.get("/verify", gracefulVerify);

module.exports = router;
