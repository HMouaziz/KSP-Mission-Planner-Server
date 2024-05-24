const getCelestialObjects = require("../utils/getCelestialObjects");

const eclipse = {
  getBodies: () => {
    return getCelestialObjects()
  }
}

module.exports = eclipse;
