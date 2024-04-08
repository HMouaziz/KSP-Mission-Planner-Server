const knex = require("../db/knexConfig");
const TABLE_NAME = "objectives";

const knexTable = () => knex(TABLE_NAME);

const Objectives = {
  getAll: async () => {
    return knexTable().select("*");
  },
  getByMissionId: async (mission_id) => {
    return knexTable().where("mission_id", mission_id).first();
  },
  create: async (objectiveData) => {
    return knexTable().insert(objectiveData);
  },
  update: async (id, objectiveData) => {
    const updatedObjective = knexTable().where("id", id);
    await updatedObjective.update(objectiveData);
    return updatedObjective.first();
  },
  remove: async (id) => {
    return knexTable().where("id", id).del();
  },
};

module.exports = Objectives;