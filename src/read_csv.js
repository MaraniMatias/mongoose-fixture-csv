/*
  console.log(
    { csv, model: model.collection.name, csvFieldId },
    subObjectsModels
  );
  */
const readCSVFile = require("./read_csv_file");
const csvToMongo = require("./csv_to_mongo");

const redCSV = ({ csv, model, csvFieldId, subObjectsModels }, opt) =>
  readCSVFile(csv, opt).then(rows =>
    csvToMongo(rows, { csv, model, csvFieldId, subObjectsModels }, opt).then(
      objectIDs => ({
        [model.collection.name]: objectIDs
          .map(ele => Object.keys(ele).map(key => ele[key]))
          .map(ele => ele[0])
      })
    )
  );
module.exports = redCSV;
