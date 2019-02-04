const makedFixtureConfig = fixtureConfig => {
  let otherKeys = {}; // models key, sub models, sub objetos
  Object.keys(fixtureConfig).forEach(key => {
    if (key !== "csv") otherKeys[key] = fixtureConfig[key];
  });
  let subObjectsModels = {};
  Object.keys(otherKeys).forEach(key => {
    if (key !== "csv" && key !== "model" && key !== "csvFieldId") {
      if (typeof otherKeys[key].csv !== "undefined")
        subObjectsModels[key] = makedFixtureConfig(otherKeys[key]);
    }
  });
  return {
    csv: fixtureConfig.csv,
    csvFieldId: fixtureConfig.csvFieldId,
    model: fixtureConfig.model,
    subObjectsModels
  };
};
module.exports = makedFixtureConfig;
