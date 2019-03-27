const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExtraSchema = new Schema({
	nombre:{
		type:String
	},
	precio:{
		type:Number
	},
	descripcion:{
		type:String
	},
	activo:{
		type: Boolean,
		default:true
	},
	creado_en: {
		type: Date,
		default: Date.now()
	},
	actualizado_en: {
		type: Date,
		default: Date.now()
	}
}, {
	versionKey: false,
	usePushEach: true
});

module.exports = mongoose.model("Extra", ExtraSchema);
