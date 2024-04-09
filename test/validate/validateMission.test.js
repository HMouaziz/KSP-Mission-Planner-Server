const chai = require('chai');
const {validateMission} = require("../../utils/validate");
const expect = chai.expect;

describe('Mission validation', function() {
  it('should validate a valid mission', function() {
    const missionData = {
      name: 'Test Mission',
      description: 'This is a test mission',
      budget: 100000,
      status: 'planned',
      priority: 'high',
      type_id: 1
    };

    expect(() => validateMission(missionData)).to.not.throw();
  });

  it('should invalidate a mission without a name', function() {
    const missionData = {
      description: 'This is a test mission',
      budget: 100000,
      status: 'planned',
      priority: 'high',
      type_id: 1
    };

    expect(() => validateMission(missionData)).to.throw();
  });

  // Add more tests as needed
});