const fixtureCSV = require("./../index");
const mongoose = require("mongoose");

// Models
const csvModel = [
  /*
  {
    csv: "story.csv",
    model: require("./models/story"),
    // csvFieldId: 'id' // En caso de no estar toma como id el index
    author: {
      csv: "usuario.csv",
      model: require("./models/usuario"),
      objectId: true // En caso de no estar es in sub objeto
      // csvFieldId: 'id' // En caso de no estar toma como id el index
    }
  },
  */
  {
    csv: "usuarios.csv",
    model: require("./models/usuario")
  },
  {
    csv: "componente.csv",
    model: require("./models/componente")
  }
];

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
          console.log(objectIDs[0]);
        })
        .finally(() => {
          mongoose.disconnect();
        });
    }
  }
);
