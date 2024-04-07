const knex = require("../db/knexConfig");

const missionsController = {
  getAll: async (req, res) => {
    try {
      const allMissions = await knex('missions')
        .select('*');
      return res.status(200).json({ data: allMissions });
    } catch (error) {
      console.error("Error fetching inventory items: ", error);
      return res.status(500).json({
        error: "Failed to retrieve inventory items. Please try again later.",
      });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const mission = await knex("missions")
        .where("id", id)
        .select("*");
      if (mission.length === 0) {
        return res.status(404).json({ error: "Mission not found." });
      }
      return res.status(200).json({ data: mission[0] });
    } catch (error) {
      console.error("Error fetching mission: ", error);
      return res.status(500).json({
        error: "Failed to retrieve the mission. Please try again later.",
      });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const numUpdated = await knex("missions")
        .where("id", id)
        .update(req.body);

      if (numUpdated) {
        const updatedMission = await knex("missions")
          .where("id", id)
          .first();
        return res.status(200).json(updatedMission);
      } else {
        return res.status(404).json({
          error: "Mission not found. Update operation could not be performed.",
        });
      }
    } catch (error) {
      console.error("Error updating mission", error);
      return res.status(500).json({
        error: "Failed to update the Mission. Please try again later.",
      });
    }
  },
  remove: async (req, res) => {
    const { id } = req.params;
    try {
      const numDeleted = await knex("missions").where("id", id).del();
      if (numDeleted) {
        return res
          .status(200)
          .json({ message: "Mission deleted successfully." });
      } else {
        return res.status(404).json({
          error:
            "Mission not found. Deletion operation could not be performed.",
        });
      }
    } catch (error) {
      console.error("Error deleting mission: ", error);
      return res.status(500).json({
        error: "Failed to delete the mission. Please try again later.",
      });
    }
  },
};

module.exports = missionsController;
