const {
  registerUserService,
  loginUserService,
  logoutUserService,
} = require("../services/authServices");
const fs = require("fs");
const { decryptData } = require("../auth/authUtils");

async function registerUser(req, res, next) {
  try {
    const { data } = req.body;
    console.log(data);
    const result = await decryptData(data);
    const { email, password } = JSON.parse(result);
    const username = email.split("@")[0]
    const user = await registerUserService(username, email, password);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;
    const token = await loginUserService(email, password);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.status(200).send("Login successful");
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

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getPublicKey,
};
