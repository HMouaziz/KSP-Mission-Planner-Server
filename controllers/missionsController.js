const { getAll, getById, create, update, remove} = require("../models/Missions");
const { handleRequest } = require("../utils/handleRequest");
const { validateMission } = require("../utils/validate");

const missionsController = {
  getAll: handleRequest(async (_req) => {
    const missions = await getAll();
    return { status: 200, body: { data: missions } };
  }),
  getById: handleRequest(async ({ params: { id } }) => {
    const mission = await getById(id);
    return { status: 200, body: { data: mission[0] } };
  }),
  create: handleRequest(async ({ body }) => {
    validateMission(body);
    const [newId] = await create(body);
    return { status: 201, body: { message: "Mission created successfully.", data: { newId } } };
  }),
  update: handleRequest(async ({ params: { id }, body }) => {
    validateMission(body);
    const updatedMission = await update(id, body);
    return { status: 200, body: { data: updatedMission } };
  }),
  remove: handleRequest(async ({ params: { id } }) => {
    await remove(id);
    return { status: 200, body: { message: "Mission deleted successfully." } };
  }),
};

module.exports = missionsController;
