const { expect } = require('chai');
const {validateObjective} = require("../../utils/validate");

describe('Objective Validation', () => {
  it('should validate a valid objective object', () => {
    const objectiveData = {
      mission_id: 1,
      description: 'Reach the orbit of Mars.',
      type: 'OrbitDuration',
      data: '{}',
      status: 'Planned'
    };
    expect(() => validateObjective(objectiveData)).to.not.throw();
  });

  it('should throw an error for missing required fields', () => {
    const objectiveData = {
      // mission_id is required but missing
      description: 'Land on the Martian surface.',
      type: 'Speed'
    };
    expect(() => validateObjective(objectiveData)).to.throw();
  });

  it('should throw an error for invalid type', () => {
    const objectiveData = {
      mission_id: 1,
      description: 'Land on the Martian surface.',
      type: 'InvalidType', // Invalid type
      data: '{}'
    };
    expect(() => validateObjective(objectiveData)).to.throw();
  });

  // Add more tests for other scenarios
});
