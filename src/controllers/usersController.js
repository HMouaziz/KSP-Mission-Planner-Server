const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../models/Users");
const { handleRequest } = require("../utils/handleRequest");

//TODO: validation for users

const usersController = {
  getAll: handleRequest(async (_req) => {
    const users = await getAll();
    return { status: 200, body: { data: users } };
  }),
  getById: handleRequest(async ({ params: { id } }) => {
    const user = await getById(id);
    return { status: 200, body: { data: user[0] } };
  }),
  create: handleRequest(async ({ body }) => {
    const [newId] = await create(body);
    return {
      status: 201,
      body: { message: "user created successfully.", data: { newId } },
    };
  }),
  update: handleRequest(async ({ body }) => {
    const { id, createdAt, updatedAt, ...data } = body;
    const updatedUser = await update(id, data);
    return { status: 200, body: { data: updatedUser } };
  }),
  remove: handleRequest(async ({ params: { id } }) => {
    await remove(id);
    return { status: 200, body: { message: "user deleted successfully." } };
  }),
};

module.exports = usersController;
