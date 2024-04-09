const Types = require("../models/Types");
const { handleRequest } = require("../utils/handleRequest");
const { validateType } = require("../utils/validate");

const typesController = {
  getAll: handleRequest(async (_req) => {
    const types = await Types.getAll();
    return { status: 200, body: { data: types } };
  }),
  getById: handleRequest(async ({ params: { id } }) => {
    const type = await Types.getById(id);
    return { status: 200, body: { data: type[0] } };
  }),
  create: handleRequest(async ({ body }) => {
    validateType(body);
    const [newId] = await Types.create(body);
    return { status: 201, body: { message: "Type created successfully.", data: { newId } } };
  }),
  update: handleRequest(async ({ params: { id }, body }) => {
    validateType(body);
    const updatedType = await Types.update(id, body);
    return { status: 200, body: { data: updatedType } };
  }),
  remove: handleRequest(async ({ params: { id } }) => {
    await Types.remove(id);
    return { status: 200, body: { message: "Type deleted successfully." } };
  }),
};

module.exports = typesController;
