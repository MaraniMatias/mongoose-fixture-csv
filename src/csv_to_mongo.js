const readCSVFile = require("./read_csv_file");
const rowToJson = require("./row_to_json");

const makeSubObject = ({ entityId, entity }, subObjectsModels, opt) => {
  // console.log(subObjectsModels);
  return new Promise(resolve => {
    let keys = Object.keys(subObjectsModels);
    if (keys.length === 0) {
      resolve({ entityId, entity });
    } else {
      keys.forEach(key => {
        const { csv, model, csvFieldId, ref } = subObjectsModels[key];
        if (typeof csv === "string") {
          // console.log("subObject", key, model, subObjectsModels[key]);
          readCSVFile(csv, opt).then(rows => {
            let header = rows.splice(0, 1)[0];
            let indexRef = header.indexOf(ref);
            entity[key] = [];
            if (typeof model === "undefined") {
              rows
                .filter(ele => entityId === ele[indexRef])
                .forEach(row => {
                  entity[key].push(
                    JSON.parse(rowToJson(csvFieldId, header, row, opt))
                  );
                });
            } else {
              // TODO es un modelo, fijarese si esta en db o guardarlo
            }
            // console.log("father", entityId, "\n=>", entity);
            resolve({ entityId, entity });
          });
        }
      });
    }
  });
};

const csvToEntity = (
  { header, row, indexEle },
  { csvFieldId, subObjectsModels },
  opt
) => {
  let indexId = header.indexOf(csvFieldId);
  let entityId = indexId >= 0 ? row[indexId] : indexEle;
  // console.log("father", row, "->", entityId);
  return new Promise(resolve => {
    let entity = JSON.parse(rowToJson(csvFieldId, header, row, opt));
    makeSubObject({ entityId, entity }, subObjectsModels, opt)
      .then(entity => {
        // console.log("id: %s \nentity:", entityId, entity);
        resolve(entity);
      })
      .catch(e => resolve(e));
  });
};

const csvToMongo = (rows, { model, csvFieldId, subObjectsModels }, opt) => {
  let promise = [];
  let header = rows.splice(0, 1)[0];
  rows.forEach((row, indexEle) => {
    promise.push(
      new Promise(resolve => {
        csvToEntity(
          { header, row, indexEle },
          { model, csvFieldId, subObjectsModels },
          opt
        ).then(({ entityId, entity }) => {
          // console.log("csvToEntity =>\nid: %s", entityId, entity);
          new model(entity).save((err, entityDb) => {
            if (err) resolve(err);
            else {
              if (opt.showSave) console.log("Entity saved \n", entityDb);
              resolve({ [entityId]: entityDb._id });
            }
          });
        });
      })
    );
  });
  return Promise.all(promise);
};
module.exports = csvToMongo;
