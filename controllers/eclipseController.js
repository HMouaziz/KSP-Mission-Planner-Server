const { getBodies } = require("../models/Eclipse");

const eclipseController = {
  calculate: (req) => {
    const { body:bodyId } = req.body
    const apoapsis = 1000000
    const periapsis = 1000000

    const bodies = getBodies();
    const body = bodies.find(body => body.id === bodyId)

    const R = body.radius;                                             // Body radius
    const Ra = apoapsis + R;                                           // Apoapsis measured from the center of the body
    const Rp = periapsis + R;                                          // Periapsis measured from the center of the body
    const a = (Ra + Rp) / 2;                                  // Semi-major axis
    const b = Math.sqrt(Ra * Rp);                          // Semi-minor axis
    const e = (Ra - Rp) / (Ra + Rp);                          // Eccentricity
    const l = (2 * (Ra * Rp)) / (Ra + Rp);                    // Semi-latus rectum of the orbital ellipse
    const u = body.stdGravParam;                                       // Gravitational parameter
    const h = Math.sqrt(l * u);                            // Specific angular momentum

    const sinValue= Math.sin(R / b);
    if (sinValue === 0) {
      throw new Error("Calculation error due to division by zero in the sine function.");
    }

    const result = ((2 * a * b) / h) * (1 / sinValue + (e * R / b))

    return { status: 200, body: { data: result  } }
  },
};

module.exports = eclipseController;
