const express = require("express");
const router = express.Router();
const { verifyAuthRequest, verifyRequest} = require("../auth/authMiddleware");
const {
  registerUser,
  loginUser,
  logoutUser,
  getPublicKey,
  verify,
} = require("../controllers/authController");
const { getSecretKey, verifyToken } = require("../auth/authUtils");

router.post("/signup", verifyAuthRequest, registerUser);
router.post("/login", verifyAuthRequest, loginUser);
router.post("/logout", logoutUser);
router.get("/public-key", getPublicKey);
router.get("/secret", getSecretKey);
router.get("/verify", verify);

module.exports = router;
