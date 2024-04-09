const { expect } = require('chai');
const {validateType} = require("../../utils/validate");

describe('Type Validation', () => {
  it('should validate a valid type object', () => {
    const typeData = {
      id: 1,
      name: 'Explorer',
      description: 'Designed for planetary exploration.'
    };
    expect(() => validateType(typeData)).to.not.throw();
  });

  it('should throw an error for missing required fields', () => {
    const typeData = {
      // id is required but missing
      name: 'Observer',
      description: 'Designed for orbital observation.'
    };
    expect(() => validateType(typeData)).to.throw();
  });

  it('should throw an error for invalid id (non-integer)', () => {
    const typeData = {
      id: 'one', // Invalid id
      name: 'Observer',
      description: 'Designed for orbital observation.'
    };
    expect(() => validateType(typeData)).to.throw();
  });

  // Add more tests for other scenarios
});
