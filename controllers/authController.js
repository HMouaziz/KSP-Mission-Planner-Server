const {
  registerUserService,
  loginUserService,
  logoutUserService,
} = require("../services/authServices");
const fs = require("fs");
const { decryptData } = require("../auth/authUtils");
const jwt = require("jsonwebtoken");

async function registerUser(req, res, next) {
  try {
    const { data } = req.body;
    const result = await decryptData(data);
    const { email, password } = JSON.parse(result);
    const username = email.split("@")[0];
    const user = await registerUserService(username, email, password);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

async function loginUser(req, res, next) {
  try {
    const { data } = req.body;
    const result = await decryptData(data);
    const { email, password } = JSON.parse(result);
    const token = await loginUserService(email, password);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.status(200).json({ data: "Login successful" });
  } catch (error) {
    next(error);
  }
}

async function logoutUser(req, res, next) {
  try {
    await logoutUserService(req);
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.status(200).send("Logout successful");
  } catch (error) {
    next(error);
  }
}

function getPublicKey(req, res) {
  fs.readFile("public.pem", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ data: "Internal Server Error" });
    }
    res.status(200).json({ data });
  });
}

function verify(req, res) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(200).json({
      data: {
        isAuthenticated: false,
      },
    });
  }
  const secretKey = process.env.JWT_SECRET;
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(200).json({
        data: {
          isAuthenticated: false,
        },
      });
    }
    res.status(200).json({
      data: {
        isAuthenticated: true,
      },
    });
  });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getPublicKey,
  verify,
};
