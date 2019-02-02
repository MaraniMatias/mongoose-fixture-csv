// TODO: Ver como inportat objetos completos, armar otro csv que contenga el sub objeto
// y relacionarlo con el principal por medios de index, algo parecido a SQL

// TODO espesificar path como config
const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");
const csvToMongo = require("./csvToMongo");
const redCSV = require("./redCSV");

module.exports = redCSV;
