const { getBodies } = require("../models/Eclipse");
const { spawn } = require('child_process');

const eclipseController = {
    calculate: (req, res) => {
        const { body: bodyId, apoapsis, periapsis, inclination } = req.body;
        const bodies = getBodies();
        const body = bodies.find(body => body.id === bodyId);

        const inputData = JSON.stringify({
            body: {
                radius: body.radius,
                stdGravParam: body.stdGravParam
            },
            apoapsis,
            periapsis,
            inclination
        });

        const pythonProcess = spawn('python', ['./calculate_eclipse.py', inputData]);

        pythonProcess.stdout.on('data', (data) => {
            const result = JSON.parse(data);
            if (result.status === 200) {
                res.json({ status: 200, data: result.data });
            } else {
                res.status(400).json({ status: 400, error: result.error });
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
