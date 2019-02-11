// TODO: Ver como inportat objetos completos, armar otro csv que contenga el sub objeto
// y relacionarlo con el principal por medios de index, algo parecido a SQL
const readCSVFile = require("./read_csv_file");
const csvToMongo = require("./csv_to_mongo");

const redCSV = ({ csv, model, csvFieldId, subObjectsModels }, opt) => {
  /*
  console.log(
    { csv, model: model.collection.name, csvFieldId },
    subObjectsModels
  );
  */
  return new Promise(resolve => {
    model.deleteMany({}).then(() => {
      readCSVFile(csv, opt)
        .then(rows => {
          csvToMongo(rows, { csv, model, csvFieldId, subObjectsModels }, opt)
            .then(objectIDs => {
              resolve({
                [model.collection.name]: objectIDs
                  .map(ele => Object.keys(ele).map(key => ele[key]))
                  .map(ele => ele[0])
              });
            })
            .catch(err => resolve(err));
        })
        .catch(err => {
          resolve(err);
        });
    });
  });
};
module.exports = redCSV;
