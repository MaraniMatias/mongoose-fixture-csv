const fixtureCSV = require("./../index");
const mongoose = require("mongoose");

// Models
const Usuarios = require("./models/Usuario");

const csvModel = [{ csv: "usuarios.csv", model: Usuarios }];

mongoose.connect(
  "mongodb://localhost/fixture-test",
  { useCreateIndex: true, useNewUrlParser: true },
  err => {
    if (err) {
      return console.error("Error al conectar a la base de datos: " + err);
    } else {
      console.log("Conexón a la base de datos establecida correctamente.");
      fixtureCSV(csvModel, { basePath: __dirname + "/csv/" })
        .catch(err => {
          console.error(err.message);
          return;
        })
        .then(objectIDs => {
          console.log(objectIDs);
        })
        .finally(() => {
          mongoose.disconnect();
        });
    }
  }
);