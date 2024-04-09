const knex = require("../db/knexConfig");
const TABLE_NAME = "mission_types";

const knexTable = () => knex(TABLE_NAME);

const Types = {
  getAll: async () => {
    return knexTable().select("*");
  },
  getById: async (id) => {
    return knexTable().where("id", id).first();
  },
  create: async (typeData) => {
    return knexTable().insert(typeData);
  },
  update: async (id, typeData) => {
    const updatedType = knexTable().where("id", id);
    await updatedType.update(typeData);
    return updatedType.first();
  },
  remove: async (id) => {
    return knexTable().where("id", id).del();
  },
};

module.exports = Types;
