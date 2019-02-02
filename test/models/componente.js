const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: modelo rápido agregar validaciones y métodos
const schema = new Schema({
  // ## Valores generales
  // Nombre del componente de vue y uetifyjs
  componente: {
    type: String,
    trim: true,
    required: true
  },

  // ## Para componentes simples
  // Pensado en el caso que se quiera hacer componentes simple y
  // dejarlos guardados en la db para usarlos en varios formularios.
  //
  // Por ejemplo si quieren un listado de colores, y lo usan en varios
  // formularios, no tiene sentido crear un componente para eso, excepto que quiera que se muestre el
  // colore en el componente.

  label: String,
  // Si tiene muchos items y multiple es true entonces el componente es una lista de checkbox
  // Si tiene muchos items pero multiple es false entonces es radio-group
  items: [String], // En caso de que el componente sea un select o un radio-group
  // Si acepta multiples valores
  multiple: {
    type: Boolean,
    default: false
  },
  // String según https://baianat.github.io/vee-validate/guide/rules.html
  validaciones: {
    type: String,
    trim: true
  },
  mensaje_ayuda: {
    type: String,
    trim: true,
    lowercase: true
  },
  valor_predeterminado: String
});

module.exports = mongoose.model("componentes", schema);
