const fixtureCSV = require("./src/core");

module.exports = (
  fixtureConfig,
  { showSave, delimiter, basePath, skipUndefined }
) => {
  return fixtureCSV(fixtureConfig, {
    showSave: typeof showSave === "undefined" ? false : showSave,
    delimiter: typeof delimiter === "undefined" ? ";" : delimiter,
    basePath: typeof basePath === "undefined" ? undefined : basePath,
    skipUndefined: typeof skipUndefined === "undefined" ? true : skipUndefined
  });
};
