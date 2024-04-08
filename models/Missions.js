const knex = require("../db/knexConfig");
const TABLE_NAME = "missions";

const knexTable = () => knex(TABLE_NAME);

const Missions = {
  getAll: async () => {
    return knexTable().select("*");
  },
  getById: async (id) => {
    return knexTable().where("id", id).first();
  },
  create: async (missionData) => {
    return knexTable().insert(missionData);
  },
  update: async (id, missionData) => {
    const updatedMission = knexTable().where("id", id);
    await updatedMission.update(missionData);
    return updatedMission.first();
  },
  remove: async (id) => {
    return knexTable().where("id", id).del();
  },
};

module.exports = Missions;
