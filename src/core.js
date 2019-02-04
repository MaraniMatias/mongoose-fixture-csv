// TODO: Ver como inportat objetos completos, armar otro csv que contenga el sub objeto
// y relacionarlo con el principal por medios de index, algo parecido a SQL

const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");
const readCSV = require("./read_csv");
const makedFixtureConfig = require("./maked_fixture_config");

function fixtureCSV(arrayCsvFile, options) {
  // console.log(options);
  // Promise all puede ser mala idea, salen juntas
  let promises = [];
  arrayCsvFile.forEach(fixtureConfig => {
    // console.log(fixtureConfig);
    const mfc = makedFixtureConfig(fixtureConfig);
    /*
    csv: fixtureConfig.csv,
    csvFieldId: fixtureConfig.csvFieldId,
    model: fixtureConfig.model,
    subObjects,
    subModels
    */
    // console.log(mfc);

    promises.push(
      new Promise((resolve, reject) => {
        readCSV(mfc, options)
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
