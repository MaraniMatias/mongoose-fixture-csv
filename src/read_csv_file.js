const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");

const readCSVFile = (csv, opt) => {
  let csvFilePath = path.resolve(
    path.normalize(
      typeof opt.basePath !== "undefined" ? opt.basePath + "/" + csv : csv
    )
  );
  return new Promise((resolve, reject) => {
    fs.readFile(csvFilePath, "utf8", (err, data) => {
      if (err || !data) {
        resolve(new Error(err.message));
        // reject(err);
      } else {
        parse(
          data.toString(),
          { trim: true, delimiter: opt.delimiter || ";" },
          (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          }
        );
      }
    });
  });
};
module.exports = readCSVFile;
