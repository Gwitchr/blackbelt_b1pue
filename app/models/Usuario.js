const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
	nombre:{
		type: String,
		required: true
	},
	apellido:{
		type: String,
		required: true
	},
	metodo_pago:[{
		type: String,
		required: true
	}],
	edad:{
		type: Number,
		required: true
	},
	sexo:{
		type: String
	},
	email:{
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	favoritos:[{
		type: String,
		required: true
	}],
	ubicacion:[{
		type: String,
		required: true
	}],
	creado_en: {
		type: Date,
		default: Date.now()
	},
	actualizado_en: {
		type: Date,
		default: Date.now()
	}
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;