const {registerUser} = require("../auth/authServices");


const userController = {
  register: (req, res) => {
    const {username, email, password} = req
    registerUser(username, email, password)
  },
  login: (req, res) => {},
  logout: (req, res) => {},
};

module.exports = userController;
