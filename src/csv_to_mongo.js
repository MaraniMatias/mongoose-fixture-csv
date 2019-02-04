const rowToJson = require("./row_to_json");
// NOTE: Fechas con formate yyyy-mm-ddThh:mm:ss
// NOTE: Fechas con formate yyyy-mm-ddThh:mm:ss.dddZ
const isDateValid = /^(?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01])T(?:[0-9]|0[0-9]|1[0-9]|2[0-3])(?::(?:[0-5][0-9])){2}(?:\.\d{3}Z)?$/;
const isNotString = /^(null|false|true)$/;
const isArray = /^\[((?:.+,)(?:.+))\]$/;

// Get Dia y Hora en grupos
// /^((?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01]))T((?:[0-9]|0[0-9]|1[0-9]|2[0-3])(?::(?:[0-5][0-9])){2})(?:\.\d{3}Z)?$/
const csvToMongo = (rows, { model, csvFieldId, subObjectsModels }, opt) => {
  let header = rows.splice(0, 1)[0];
  let promises = [];
  rows.forEach((row, indexEle) => {
    let indexId = header.indexOf(csvFieldId);
    let entityId = indexId >= 0 ? row[indexId] : indexEle;
    let entity = JSON.parse(rowToJson(entityId, header, row, opt));

    // Join subObjectsModels
    Object.keys(subObjectsModels).forEach(key => {
      console.log(entityId, key, subObjectsModels[key]);
    });

    promises.push(
      new Promise((resolve, reject) => {
        new model(entity).save((err, entityDb) => {
          if (err) reject(err);
          else {
            if (opt.showSave) console.log("Entity saved \n", entityDb);
            resolve({ [entityId]: entityDb._id });
          }
        });
      })
    );
  });
  return Promise.all(promises);
};
module.exports = csvToMongo;
