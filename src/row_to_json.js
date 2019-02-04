// NOTE: Fechas con formate yyyy-mm-ddThh:mm:ss
// NOTE: Fechas con formate yyyy-mm-ddThh:mm:ss.dddZ
const isDateValid = /^(?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01])T(?:[0-9]|0[0-9]|1[0-9]|2[0-3])(?::(?:[0-5][0-9])){2}(?:\.\d{3}Z)?$/;
const isNotString = /^(null|false|true|\d+)$/;
const isArray = /^\[((?:.+,)(?:.+))\]$/;

// Get Dia y Hora en grupos
// /^((?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01]))T((?:[0-9]|0[0-9]|1[0-9]|2[0-3])(?::(?:[0-5][0-9])){2})(?:\.\d{3}Z)?$/

module.exports = (csvHeaderId, header, row, opt = { skipUndefined: true }) => {
  let entityJSON = "";
  header.forEach((key, index) => {
    if (csvHeaderId !== key) {
      let prop;
      if (isArray.test(row[index])) {
        // FIXME: 'rojo','azul','ver\'de'
        prop = row[index]
          .match(isArray)[0]
          .replace(/^\['/, '["')
          .replace(/'\]$/, '"]')
          .replace(/'\s*,\s*'/g, '","');
      } else if (isDateValid.test(row[index])) {
        prop = `"${new Date(row[index]).toISOString()}"`;
      } else if (isNotString.test(row[index])) {
        prop = row[index].replace(/^'/, "").replace(/'$'/, "");
      } else {
        prop = `"${row[index]}"`;
      }
      if (opt.skipUndefined || prop !== '"undefined"') {
        entityJSON = `${entityJSON},"${key}":${prop}`;
      }
    }
  });
  return `{${entityJSON.substring(1)}}`;
};
