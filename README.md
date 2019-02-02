# mongoose-fixture-csv

Parse CSV file and it will make mongoose model to save on Mongodb.

```bash
npm install mongoose-fixture-csv
```

## Using

__You fixture file__

```javascript
const fixtureCSV = require("mongoose-fixture-csv");
const mongoose = require("mongoose");

// Models
const Usuarios = require("./models/usuario");

const csvModel = [{ csv: "usuarios.csv", model: Usuarios }];

mongoose.connect(
  "mongodb://localhost/fixture-test",
  { useCreateIndex: true, useNewUrlParser: true },
  err => {
    if (err) {
      return console.error(err);
    } else {
      console.log("Conexón a la base de datos establecida correctamente.");
      fixtureCSV(csvModel, { basePath: __dirname + "/csv/", delimiter: ";" })
        .catch(err => {
          console.error(err.message);
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
```

__Mongoose Model__

```javascript
const schema = new Schema({
  name:  String,
  mail: String,
  password: String
});

schema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = crypto
      .createHash("sha256")
      .update(this.password)
      .digest("hex");
  }
  next();
});

module.exports = mongoose.model("Usuarios", schema);
```

__CSV File__

nombre;mail;password
Matias;admin@gmail.com;123456
Ezequiel;usuario@mail.com;123456


__Fixture Options__

```javascript
options = {
  showSave: false,
  delimiter: ";",
  basePath: undefined,
  skipUndefined: true
}
```
