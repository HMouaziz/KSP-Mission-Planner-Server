const {getAllMissions, getMissionById, createNewMission, updateMissionById, removeMissionById} = require("../models/Missions");

const missionsController = {
  getAll: async (req, res) => {
    try {
      const allMissions = await getAllMissions();
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
      const mission = await getMissionById(id)
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
  create: async (req, res) => {
    const {
      name,
      description,
      budget,
      start_date,
      launch_date,
    } = req.body;

    try {
      const [newId] = await createNewMission({
        name,
        description,
        budget,
        start_date,
        launch_date,
      })
      if (newId) {
        return res
          .status(201)
          .json({ message: "Mission created successfully.", data: {newId}});
      } else {
        return res
          .status(400)
          .json({ error: "Mission could not be created. Please try again." });
      }
    } catch (error) {
      console.error("Error creating mission:", error);
      return res.status(500).json({
        error: "Failed to create a new mission. Please try again later.",
      });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedMission = await updateMissionById(id, req.body)
      if (updatedMission) {
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
      const numDeleted = await removeMissionById(id)
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
