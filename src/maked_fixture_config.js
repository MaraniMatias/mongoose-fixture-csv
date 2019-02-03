const makedFixtureConfig = fixtureConfig => {
  let otherKeys = {}; // models key, sub models, sub objetos
  Object.keys(fixtureConfig).forEach(key => {
    if (key !== "csv") {
      // && key !== "model" && key !== "csvFieldId") {
      otherKeys[key] = fixtureConfig[key];
    }
  });
  let subObjects, subModels;
  Object.keys(otherKeys).forEach(key => {
    if (key !== "csv" && key !== "model" && key !== "csvFieldId") {
      if (typeof otherKeys[key].csv !== "undefined") {
        console.log("otherKeys", key); // sub object or sub model key
        if (typeof key.model === "undefined") {
          subObjects = makedFixtureConfig(otherKeys[key]);
        } else {
          subModels = makedFixtureConfig(otherKeys[key]);
        }
      }
    }
  });
  return {
    csv: fixtureConfig.csv,
    csvFieldId: fixtureConfig.csvFieldId,
    model: fixtureConfig.model,
    subObjects,
    subModels
  };
};
module.exports = makedFixtureConfig;
