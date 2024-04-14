const  { getAll, getById, getByMissionId, create, update, remove} = require("../models/Objectives");
const { handleRequest } = require("../utils/handleRequest");
const { validateObjective } = require("../utils/validate");

const objectivesController = {
  getAll: handleRequest(async (_req) => {
    const objectives = await getAll();
    return {status: 200, body: {data: objectives}};
  }),
  getById: handleRequest(async ({params: {id}}) => {
    const objective = await getById(id);
    return {status: 200, body: {data: objective[0]}};
  }),
  getByMissionId: handleRequest(async ({params: {mission_id}}) => {
    const objectives = await getByMissionId(mission_id);
    return {status: 200, body: {data: objectives}};
  }),
  create: handleRequest(async ({body}) => {
    validateObjective(body);
    const [newId] = await create(body);
    return {status: 201, body: {message: "Objective created successfully.", data: {newId}}};
  }),
  update: handleRequest(async ({params: {id}, body}) => {
    validateObjective(body);
    const updatedObjective = await update(id, body);
    return {status: 200, body: {data: updatedObjective}};
  }),
  remove: handleRequest(async ({params: {id}}) => {
    await remove(id);
    return {status: 200, body: {message: "Objective deleted successfully."}};
  }),
};

module.exports = objectivesController;
