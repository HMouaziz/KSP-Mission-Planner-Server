const { expect } = require('chai');
const {validateStage} = require("../utils/validate");


describe('Stage Validation', () => {
  it('should validate a valid stage object', () => {
    const stageData = {
      mission_id: 1,
      order_index: 0,
      type: 'Launch',
      status: 'Planned',
      description: 'Launch the spacecraft.',
      data: '{}'
    };
    expect(() => validateStage(stageData)).to.not.throw();
  });

  it('should throw an error for missing required fields', () => {
    const stageData = {
      // mission_id is required but missing
      order_index: 0,
      type: 'Launch'
    };
    expect(() => validateStage(stageData)).to.throw();
  });

  it('should throw an error for invalid type', () => {
    const stageData = {
      mission_id: 1,
      order_index: 1,
      type: 'InvalidType', // Invalid type
      status: 'Planned'
    };
    expect(() => validateStage(stageData)).to.throw();
  });

  // Add more tests for other scenarios
});
