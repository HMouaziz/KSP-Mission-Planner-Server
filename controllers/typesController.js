const {getAll, getById, create, update, remove } = require("../models/Types");
const {handleRequest} = require("../utils/handleRequest");
const {validateType} = require("../utils/validate");

const typesController = {
  getAll: handleRequest(async (_req) => {
    const types = await getAll();
    return {status: 200, body: {data: types}};
  }),
  getById: handleRequest(async ({params: {id}}) => {
    const type = await getById(id);
    return {status: 200, body: {data: type[0]}};
  }),
  create: handleRequest(async ({body}) => {
    validateType(body);
    const [newId] = await create(body);
    return {status: 201, body: {message: "Type created successfully.", data: {newId}}};
  }),
  update: handleRequest(async ({params: {id}, body}) => {
    validateType(body);
    const updatedType = await update(id, body);
    return {status: 200, body: {data: updatedType}};
  }),
  remove: handleRequest(async ({params: {id}}) => {
    await remove(id);
    return {status: 200, body: {message: "Type deleted successfully."}};
  }),
};

module.exports = typesController;
