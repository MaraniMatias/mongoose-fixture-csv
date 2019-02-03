// TODO: Ver como inportat objetos completos, armar otro csv que contenga el sub objeto
// y relacionarlo con el principal por medios de index, algo parecido a SQL

// TODO espesificar path como config
const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");
const csvToMongo = require("./csv_to_mongo");

const redCSV = ({ csv, model, csvFieldId, subObjectsModels }, opt) => {
  console.log(csv, model.collection.name, csvFieldId, subObjectsModels);
  const file =
    typeof opt.basePath !== "undefined" ? opt.basePath + "/" + csv : csv;
  let csvFilePath = path.resolve(path.normalize(file));
  return new Promise((resolve, reject) => {
    model.deleteMany({}).then(() => {
      fs.readFile(csvFilePath, "utf8", (err, data) => {
        if (err || !data) {
          reject(err);
        } else {
          parse(
            data.toString(),
            { trim: true, delimiter: opt.delimiter || ";" },
            (err, rows) => {
              if (err) {
                reject(err);
              } else {
                csvToMongo(rows, model, opt)
                  .then(objectIDs =>
                    resolve({
                      [model.collection.name]: objectIDs
                    })
                  )
                  .catch(err => reject(err));
              }
            }
          );
        }
      });
    });
  });
};
module.exports = redCSV;
