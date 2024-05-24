const  {getAll, getById, getByMissionId, create, update, remove }  = require("../models/Stages");
const { handleRequest } = require("../utils/handleRequest");
const { validateStage } = require("../utils/validate");

const stagesController = {
  getAll: handleRequest(async (_req) => {
    const stages = await getAll();
    return {status: 200, body: {data: stages}};
  }),
  getById: handleRequest(async ({params: {id}}) => {
    const stage = await getById(id);
    return {status: 200, body: {data: stage[0]}};
  }),
  getByMissionId: handleRequest(async ({params: {mission_id}}) => {
    const stage = await getByMissionId(mission_id);
    return {status: 200, body: {data: stage[0]}};
  }),
  create: handleRequest(async ({body}) => {
    validateStage(body);
    const [newId] = await create(body);
    return {status: 201, body: {message: "Stage created successfully.", data: {newId}}};
  }),
  update: handleRequest(async ({params: {id}, body}) => {
    validateStage(body);
    const updatedStage = await update(id, body);
    return {status: 200, body: {data: updatedStage}};
  }),
  remove: handleRequest(async ({params: {id}}) => {
    await remove(id);
    return {status: 200, body: {message: "Stage deleted successfully."}};
  }),
};

module.exports = stagesController;
