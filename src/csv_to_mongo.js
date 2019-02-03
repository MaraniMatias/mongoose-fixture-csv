const rowToJson = require("./row_to_json");
// NOTE: Fechas con formate yyyy-mm-ddThh:mm:ss
// NOTE: Fechas con formate yyyy-mm-ddThh:mm:ss.dddZ
const isDateValid = /^(?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01])T(?:[0-9]|0[0-9]|1[0-9]|2[0-3])(?::(?:[0-5][0-9])){2}(?:\.\d{3}Z)?$/;
const isNotString = /^(null|false|true)$/;
const isArray = /^\[((?:.+,)(?:.+))\]$/;

// Get Dia y Hora en grupos
// /^((?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01]))T((?:[0-9]|0[0-9]|1[0-9]|2[0-3])(?::(?:[0-5][0-9])){2})(?:\.\d{3}Z)?$/
const csvToMongo = (rows, mongooseScheme, opt) => {
  let header = rows.splice(0, 1)[0];
  let promises = [];
  rows.forEach((ele, indexEle) => {
    let csvId = indexEle;
    const entity = JSON.parse(rowToJson(header, ele, opt));
    promises.push(
      new Promise((resolve, reject) => {
        new mongooseScheme(entity).save((err, entityDb) => {
          if (err) reject(err);
          else {
            if (opt.showSave) console.log(entityDb);
            resolve({ [csvId]: entityDb._id });
          }
        });
      })
    );
  });
  return Promise.all(promises);
};
module.exports = csvToMongo;
