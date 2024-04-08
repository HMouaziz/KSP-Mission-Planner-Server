const knex = require("../db/knexConfig");
const TABLE_NAME = "stages";

const knexTable = () => knex(TABLE_NAME);

const Stages = {
  getAll: async () => {
    return knexTable().select("*");
  },
  getByMissionId: async (mission_id) => {
    return knexTable().where("mission_id", mission_id).first();
  },
  create: async (stageData) => {
    return knexTable().insert(stageData);
  },
  update: async (id, stageData) => {
    const updatedStage = knexTable().where("id", id);
    await updatedStage.update(stageData);
    return updatedStage.first();
  },
  remove: async (id) => {
    return knexTable().where("id", id).del();
  },
};

module.exports = Stages;