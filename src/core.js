// TODO: Ver como inportat objetos completos, armar otro csv que contenga el sub objeto
// y relacionarlo con el principal por medios de index, algo parecido a SQL

const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");
const redCSV = require("./red_csv");
const makedFixtureConfig = require("./maked_fixture_config");

function fixtureCSV(
  arrayCsvFile,
  options = {
    showSave: !false,
    delimiter: ";",
    // basePath: undefined,
    skipUndefined: true
  }
) {
  // Promise all puede ser mala idea, salen juntas
  let promises = [];
  arrayCsvFile.forEach(fixtureConfig => {
    // console.log(fixtureConfig);
    const mfc = makedFixtureConfig(fixtureConfig);
    if (opt.showSave) console.log(mfc);
    /*
    csv: fixtureConfig.csv,
    csvFieldId: fixtureConfig.csvFieldId,
    model: fixtureConfig.model,
    subObjects,
    subModels
    */
    const { csv, model, csvFieldId } = mfc;

    promises.push(
      new Promise((resolve, reject) => {
        redCSV(csv, model, options)
          .then(objectIDs => {
            resolve({
              [model.collection.name]: objectIDs
            });
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
