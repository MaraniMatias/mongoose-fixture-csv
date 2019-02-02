const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");

const UsuarioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
    required: "El nombre del usuario es requerido"
  },
  mail: {
    type: String,
    required: "El mail es requerido",
    trim: true,
    lowercase: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Por favor, complete ingrese una dirección de correo electrónico válida"
    ]
  },
  password: {
    type: String,
    required: "La contraseña es requerida",
    match: [
      /^((?=.*\d)(?=.*[a-záéóúíñ])(?=.*[A-ZÁÉÓÚÍÑ])?(.*[@#$%!&?¡¿!])?.{6,30})$/,
      "La contraseña debe tener almenas una mayúscula, numero y mas de 6 caracteres"
    ]
  },
  googleId: String
});

UsuarioSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = crypto
      .createHash("sha256")
      .update(this.password)
      .digest("hex");
  }
  next();
});

module.exports = mongoose.model("Usuarios", UsuarioSchema);
