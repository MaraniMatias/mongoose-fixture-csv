const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");

module.exports = (csv, opt) => {
  let csvFilePath = path.resolve(
    path.normalize(
      typeof opt.basePath !== "undefined" ? opt.basePath + "/" + csv : csv
    )
  );
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(csvFilePath, "utf8");
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
    } catch (err) {
      resolve(new Error(err.message));
    }
  });
};
