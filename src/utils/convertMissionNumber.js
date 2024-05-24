function convertMissionNumber(missionData) {
  let correctedData = { ...missionData };

  if (correctedData.hasOwnProperty('budget')) {
    const budgetAsInt = parseInt(correctedData.budget, 10);
    correctedData.budget = isNaN(budgetAsInt) ? 0 : budgetAsInt;
  }
  return correctedData;
}

module.exports = convertMissionNumber