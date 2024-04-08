const knex = require("../db/knexConfig");

const Missions = {
  getAllMissions: async () => {
    return knex("missions").select("*");
  },
  getMissionById: async (id) => {
    return knex("missions").where({ id }).first();
  },
  createNewMission: async (missionData) => {
    return knex("missions").insert(missionData);
  },
  updateMissionById: async (id, missionData) => {
    const missionQuery = knex("missions").where("id", id);
    await missionQuery.update(missionData);
    return missionQuery.first();
  },
  removeMissionById: async (id) => {
    return knex("missions").where("id", id).del();
  },
};

module.exports = Missions;
