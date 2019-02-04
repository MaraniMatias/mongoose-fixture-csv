// TODO: Ver como inportat objetos completos, armar otro csv que contenga el sub objeto
// y relacionarlo con el principal por medios de index, algo parecido a SQL

// TODO espesificar path como config
const readCSVFile = require("./read_csv_file");
const csvToMongo = require("./csv_to_mongo");

const redCSV = ({ csv, model, csvFieldId, subObjectsModels }, opt) => {
  // console.log(csv, model.collection.name, csvFieldId, subObjectsModels);
  return new Promise((resolve, reject) => {
    model.deleteMany({}).then(() => {
      readCSVFile(csv, opt)
        .then(rows => {
          csvToMongo(rows, { csv, model, csvFieldId, subObjectsModels }, opt)
            .then(objectIDs =>
              resolve({
                [model.collection.name]: objectIDs
              })
            )
            .catch(err => reject(err));
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};
module.exports = redCSV;
