const { getBodies } = require("../models/Eclipse");
const { spawn } = require('child_process');

const eclipseController = {
    calculate: (req, res) => {
        const { bodyId, apoapsis, periapsis, inclination, longitudeOfAscendingNode,argumentOfPeriapsis } = req.body;
        const bodies = getBodies();
        const body = bodies.find(body => body.id === bodyId);

        const inputData = JSON.stringify({
            body: {
                radius: body.radius,
                stdGravParam: body.stdGravParam,
                soi: body.soi,
                mass: body.mass,
                solarDistance: body.orbit.semiMajorAxis,
                color: body.color,
            },
            apoapsis,
            periapsis,
            inclination,
            longitudeOfAscendingNode,
            argumentOfPeriapsis
        });

        const pythonProcess = spawn('python', ['./scripts/calculateEclipse.py', inputData]);

        pythonProcess.stdout.on('data', (data) => {
            const result = JSON.parse(data);
            if (result.status === 200) {
                res.json({ status: 200, data: result });
            } else {
                res.status(400).json({ status: 400, error: result });
            }
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`Error from Python script: ${data}`);
        });

        pythonProcess.on('close', (code) => {
            console.log(`Python script exited with code ${code}`);
        });
    },
};

module.exports = eclipseController;
