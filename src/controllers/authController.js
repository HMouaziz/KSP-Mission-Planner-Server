const {
  loginUser,
  logoutUser,
  registerUser,
} = require("../models/Authentication");
const {
  decryptData,
  generateSalt,
  hashPassword,
  getSecretKey
} = require("../utils/authUtils");
const jwt = require("jsonwebtoken");
const { handleRequest } = require("../utils/handleRequest");

const { getAsync } = require("../redis/redisUtils");
const UserNotFoundError = require("../errors/UserNotFoundError");
const PasswordMismatchError = require("../errors/PasswordMismatchError");
const UserAlreadyExistsError = require("../errors/UserAlreadyExistsError");

const authController = {
  registerUser: handleRequest(async (req, res, next) => {
    const { data } = req.body;
    const result = await decryptData(data);
    const { email, password } = JSON.parse(result);

    const username = email.split("@")[0];
    const salt = await generateSalt();
    const passwordHash = await hashPassword(password, salt);

    try {
      const user = await registerUser(username, email, passwordHash, salt);
      return { status: 200, body: { data: user } };
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return { status: error.status, body: { error: error.message } };
      }
      next(error)
    }

  }),
  loginUser: handleRequest(async (req, res, next) => {
    console.log('Received request body:', req.body)
    const { data } = req.body;
    const result = await decryptData(data);
    const { email, password } = JSON.parse(result);
    try {
      const token = await loginUser(email, password);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      });
      return { status: 200, body: { data: "Login Successful" } };
    } catch (error) {
      if (error instanceof UserNotFoundError || error instanceof PasswordMismatchError) {
        return { status: error.status, body: { error: error.message } };
      }
      next(error)
    }
  }),
  logoutUser: handleRequest(async (req, res) => {
    const token = req.cookies.token;
    await logoutUser(token);
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    return { status: 200, body: { data: "Logout Successful" } };
  }),
  getPublicKey: handleRequest(async () => {
    try {
      const data = await getAsync('publicKey');
      if (!data) {
        throw new Error('Public key not found in Redis');
      }
      return { status: 200, body: { data: data } };
    } catch (err) {
      return { status: 500, body: { error: 'Failed to retrieve public key' } };
    }
  }),
  getHMACKey: handleRequest(async () => {
    const key = await getSecretKey()
    return {status: 200, body: {data: key}};
  }),
  gracefulVerify: handleRequest(async (req) => {
    const token = req.cookies?.token;
    const secretKey = process.env.JWT_SECRET;
    if (!token) {
      return { status: 200, body: { data: { isAuthenticated: false } } };
    }
    return new Promise((resolve, _reject) => {
      jwt.verify(token, secretKey, (err, user) => {
        if (err) {
          resolve({ status: 200, body: { data: { isAuthenticated: false } } });
        } else {
          resolve({ status: 200, body: { data: { isAuthenticated: true, user } } });
        }
      });
    });
  }),
};


module.exports = authController;
