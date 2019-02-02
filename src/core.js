// TODO: Ver como inportat objetos completos, armar otro csv que contenga el sub objeto
// y relacionarlo con el principal por medios de index, algo parecido a SQL

// TODO espesificar path como config

const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");

// NOTE: Fechas con formate yyyy-mm-ddThh:mm:ss
// NOTE: Fechas con formate yyyy-mm-ddThh:mm:ss.dddZ
const isDateValid = /^(?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01])T(?:[0-9]|0[0-9]|1[0-9]|2[0-3])(?::(?:[0-5][0-9])){2}(?:\.\d{3}Z)?$/;

// Get Dia y Hora en grupos
// /^((?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01]))T((?:[0-9]|0[0-9]|1[0-9]|2[0-3])(?::(?:[0-5][0-9])){2})(?:\.\d{3}Z)?$/

const csvToMongo = (rows, mongooseScheme, opt) => {
  const isNotString = /^(null|false|true)$/;
  let header = rows.splice(0, 1)[0];
  let promises = [];
  rows.forEach(ele => {
    let entityJSON = "";
    header.forEach((key, index) => {
      let prop = isNotString.test(ele[index])
        ? ele[index].replace("'", "")
        : isDateValid.test(ele[index])
        ? `"${new Date(ele[index]).toISOString()}"`
        : `"${ele[index]}"`;
      entityJSON = `${entityJSON},"${key}":${prop}`;
    });
    const entity = JSON.parse(`{${entityJSON.substring(1)}}`);
    promises.push(
      new Promise((resolve, reject) => {
        new mongooseScheme(entity).save((err, entityDb) => {
          if (err) reject(err);
          else {
            if (opt.showSave) console.log(entityDb);
            resolve(entityDb._id);
          }
        });
      })
    );
  });
  return Promise.all(promises);
};
// module.exports.csvToMongo = csvToMongo;

const redCVS = (csvFile, mongooseScheme, opt) => {
  const file = opt.basePath ? opt.basePath + "/" + csvFile : csvFile;
  let csvFilePath = path.resolve(path.normalize(file));
  return new Promise((resolve, reject) => {
    mongooseScheme.deleteMany({}).then(() => {
      fs.readFile(csvFilePath, "utf8", (err, data) => {
        if (err || !data) {
          reject(err);
        } else {
          parse(
            data.toString(),
            { trim: true, delimiter: opt.delimiter || ";" },
            (err, rows) => {
              if (err) reject(err);
              csvToMongo(rows, mongooseScheme, opt)
                .then(objectIDs => resolve(objectIDs))
                .catch(err => reject(err));
            }
          );
        }
      });
    });
  });
};
module.exports.redCVS = redCVS;
