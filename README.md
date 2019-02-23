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
    if (err) { return console.error(err); }
    else {
      Usuarios.deleteMany({}).then(() =>
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
        )
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

|name|mail|password|
|:---|:---|:-------|
|Matias|admin@gmail.com|123456|
|Ezequiel|usuario@mail.com|123456|


__Fixture Options__

```javascript
options = {
  showSave: false,
  delimiter: ";",
  basePath: undefined,
  skipUndefined: true
}
```

### Sub object

__Mongoose Models__

```javascript
const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: String,
  pets: [
    {
      name: String,
      age: Number
    }
  ]
});
module.exports = mongoose.model("Person", schema);
```

__CSV File__

For pets

|id|name|age|person_id|
|:-|:---|:--|:--------|
|1|pet_id_1_p0|10|0|
|2|pet_id_2_p1|20|1|
|3|pet_id_3_p1|30|1|
|4|pet_id_4_p0|40|0|

For person

|name|id|
|:---|:-|
|persona_id_0|0|
|persona_id_1|1|
|persona_id_2|2|

__You fixture file__

```javascript
const fixtureCSV = require("./../index");
const mongoose = require("mongoose");

// Models
const csvModel = [
  {
    csv: "person.csv",
    model: require("./models/person"),
    csvFieldId: "id", // default index
    pets: {
      csv: "pets.csv",
      csvFieldId: "id",
      ref: "person_id"
    }
  }
];

mongoose.connect(
  "mongodb://localhost/fixture-test",
  { useCreateIndex: true, useNewUrlParser: true },
  err => {
    if (err) { return console.error(err); }
    else {
      fixtureCSV(csvModel, { basePath: __dirname + "/csv/" })
        .catch(err => { console.error(err.message); return; })
        .finally(() => { mongoose.disconnect();});
    }
  }
);
```

__With sub models__

```javascript
const fixtureCSV = require("mongoose-fixture-csv");
const Group = require("./../../../models/grupo_componente");

fixtureCSV([{ csv, model: require("./../../../models/componente") }], {
  basePath: __dirname + "/"
}).then(objectIDs => {
  new Group({ nombre: "Grupos", componentes: objectIDs.componentes }).save((err, general) => {
  if(err) { console.error(err) }
  else { console.log(general) }
  });
});
```
