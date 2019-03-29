const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ComentarioSchema = new Schema ({
	ref_restaurante:{
		type: mongoose.Types.ObjectId,
		required: true
	},
	ref_usuario:{
		type: mongoose.Types.ObjectId,
		required: true
	},
	comentario:{
		type: String,
		required: true
	},
	valoracion:{
		type: String,
		required: true,
	},
	creado_en: {
		type: Date,
		default: Date.now()
	},
	actualizado_en: {
		type: Date,
		default: Date.now()
	}
});

const Comentario = mongoose.model("Comentario", ComentarioSchema);

module.exports = Comentario;