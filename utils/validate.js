const Joi = require('joi');

const missionSchema = Joi.object({
  name: Joi.string().max(255).required(),
  description: Joi.string().allow(null),
  budget: Joi.number().allow(null),
  status: Joi.string().valid('planned', 'in_progress', 'completed', 'on_hold', 'failed', 'cancelled').default('planned'),
  priority: Joi.string().valid('high', 'normal', 'low').default('normal'),
  type_id: Joi.number().integer().required(),
});

const stageSchema = Joi.object({
  mission_id: Joi.number().integer().required(),
  order_index: Joi.number().integer().required(),
  type: Joi.string().valid(
    'Maneuver', 'Deployment', 'Launch', 'CorrectionBurn',
    'Burn', 'Aerobrake', 'Spacewalk', 'Other'
  ).required(),
  status: Joi.string().valid('Planned', 'In Progress', 'Completed', 'Failed').default('Planned'),
  description: Joi.string().allow(null),
  data: Joi.string().allow(null),
});

const objectiveSchema = Joi.object({
  mission_id: Joi.number().integer().required(),
  description: Joi.string().allow(null),
  type: Joi.string().valid(
    'Altitude', 'Flyby', 'OrbitDuration', 'PowerGeneration',
    'Speed', 'CrewRequirement', 'Other'
  ).required(),
  data: Joi.string().allow(null),
  status: Joi.string().valid('Planned', 'In Progress', 'Completed', 'Failed').default('Planned'),
});

const validateMission = (missionData) => {
  const { error } = missionSchema.validate(missionData);
  if (error) {
    throw new Error(error.details[0].message);
  }
};

const validateStage = (stageData) => {
  const { error } = stageSchema.validate(stageData);
  if (error) {
    throw new Error(error.details[0].message);
  }
};

const validateObjective = (objectiveData) => {
  const { error } = objectiveSchema.validate(objectiveData);
  if (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = { validateMission, validateStage, validateObjective };