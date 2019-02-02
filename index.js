const { redCVS } = require("./src/core");

function fixtureCSV(
  arrayCsvFile,
  options = { showSave: false, delimiter: ";", basePath: undefined }
) {
  // Promise all puede ser mala idea, salen juntas
  let promises = [];
  arrayCsvFile.forEach(({ csv, model }) => {
    promises.push(
      new Promise((resolve, reject) => {
        redCVS(csv, model, options)
          .then(objectIDs => {
            resolve(objectIDs);
          })
          .catch(err => {
            reject(err);
          });
      })
    );
  });
  return Promise.all(promises);
}
module.exports = fixtureCSV;
