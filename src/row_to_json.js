// NOTE: Fechas con formate yyyy-mm-ddThh:mm:ss
// NOTE: Fechas con formate yyyy-mm-ddThh:mm:ss.dddZ
const isDateValid = /^(?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01])T(?:[0-9]|0[0-9]|1[0-9]|2[0-3])(?::(?:[0-5][0-9])){2}(?:\.\d{3}Z)?$/;
const isNotString = /^(null|false|true)$/;
const isArray = /^\[((?:.+,)(?:.+))\]$/;

// Get Dia y Hora en grupos
// /^((?:19|20)\d\d-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01]))T((?:[0-9]|0[0-9]|1[0-9]|2[0-3])(?::(?:[0-5][0-9])){2})(?:\.\d{3}Z)?$/

module.exports = (header, ele, opt = { skipUndefined: true }) => {
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
      prop = ele[index].replace(/^'/, "").replace(/'$'/, "");
    } else {
      prop = `"${ele[index]}"`;
    }
    if (opt.skipUndefined || prop !== '"undefined"') {
      entityJSON = `${entityJSON},"${key}":${prop}`;
    }
  });
  return `{${entityJSON.substring(1)}}`;
};
