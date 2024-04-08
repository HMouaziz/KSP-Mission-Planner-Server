const { Stages } = require("../models/Stages");
const { handleRequest } = require("../utils/handleRequest");
const { validateStage } = require("../utils/validate");

const stagesController = {
  getAll: handleRequest(async (req) => {
    const stages = await Stages.getAll();
    return {status: 200, body: {data: stages}};
  }),
  getByMissionId: handleRequest(async ({params: {mission_id}}) => {
    const stage = await Stages.getByMissionId(mission_id);
    return {status: 200, body: {data: stage[0]}};
  }),
  create: handleRequest(async ({body}) => {
    validateStage(body);
    const [newId] = await Stages.create(body);
    return {status: 201, body: {message: "Stage created successfully.", data: {newId}}};
  }),
  update: handleRequest(async ({params: {id}, body}) => {
    validateStage(body);
    const updatedStage = await Stages.update(id, body);
    return {status: 200, body: {data: updatedStage}};
  }),
  remove: handleRequest(async ({params: {id}}) => {
    const numDeleted = await Stages.remove(id);
    return {status: 200, body: {message: "Stage deleted successfully."}};
  }),
};

module.exports = stagesController;
