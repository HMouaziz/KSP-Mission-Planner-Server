const  Objectives = require("../models/Objectives");
const { handleRequest } = require("../utils/handleRequest");
const { validateObjective } = require("../utils/validate");

const objectivesController = {
  getAll: handleRequest(async (_req) => {
    const objectives = await Objectives.getAll();
    return {status: 200, body: {data: objectives}};
  }),
  getByMissionId: handleRequest(async ({params: {mission_id}}) => {
    const objective = await Objectives.getByMissionId(mission_id);
    return {status: 200, body: {data: objective[0]}};
  }),
  create: handleRequest(async ({body}) => {
    validateObjective(body);
    const [newId] = await Objectives.create(body);
    return {status: 201, body: {message: "Objective created successfully.", data: {newId}}};
  }),
  update: handleRequest(async ({params: {id}, body}) => {
    validateObjective(body);
    const updatedObjective = await Objectives.update(id, body);
    return {status: 200, body: {data: updatedObjective}};
  }),
  remove: handleRequest(async ({params: {id}}) => {
    await Objectives.remove(id);
    return {status: 200, body: {message: "Objective deleted successfully."}};
  }),
};

module.exports = objectivesController;
