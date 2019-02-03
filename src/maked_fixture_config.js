const makedFixtureConfig = fixtureConfig => {
  let otherKeys = {};
  Object.keys(fixtureConfig).forEach(key => {
    if (key !== "csv") {
      // && key !== "model" && key !== "csvFieldId") {
      otherKeys[key] = fixtureConfig[key];
    }
  });
  // console.log(otherKeys);
  return {
    father: {
      csv: fixtureConfig.csv,
      csvFieldId: fixtureConfig.csvFieldId,
      model: fixtureConfig.model
    },
    child: otherKeys.csv ? makedFixtureConfig(otherKeys) : {}
  };
};
module.exports = makedFixtureConfig;
