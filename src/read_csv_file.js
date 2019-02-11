const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");

module.exports = (csv, opt) => {
  let csvFilePath = path.resolve(
    path.normalize(
      typeof opt.basePath !== "undefined" ? opt.basePath + "/" + csv : csv
    )
  );
  return new Promise(resolve => {
    try {
      const data = fs.readFileSync(csvFilePath, "utf8");
      parse(
        data.toString(),
        { trim: true, delimiter: opt.delimiter || ";" },
        (err, rows) => resolve(err || rows)
      );
    } catch (err) {
      resolve(err);
    }
  });
};
