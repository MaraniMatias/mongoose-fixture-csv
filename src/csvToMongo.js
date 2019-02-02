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
  rows.forEach(ele => {
    let entityJSON = "";
    header.forEach((key, index) => {
      let prop;
      if (isArray.test(ele[index])) {
        // FIXME: 'rojo','azul','ver\'de'
        prop = ele[index]
          .match(isArray)[0]
          .replace(/^\['/, '["')
          .replace(/'\]$/, '"]')
          .replace(/'\s*,\s*'/g, '","');
      } else if (isDateValid.test(ele[index])) {
        prop = `"${new Date(ele[index]).toISOString()}"`;
      } else if (isNotString.test(ele[index])) {
        prop = ele[index].replace("'", "");
      } else {
        prop = `"${ele[index]}"`;
      }
      if (opt.skipUndefined || prop !== '"undefined"') {
        entityJSON = `${entityJSON},"${key}":${prop}`;
      }
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
module.exports = csvToMongo;
