const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlatilloSchema = new Schema({
	nombre:{
		type: String,
		required:true
	},
	descripcion:{
		type: String,
		required:true
	},
	fotos:{
		type: Array,
		required:true
	},
	ingredientes:{
		type: Array,
		required:true
	},
	precio:{
		type: Number,
		required:true
	},
	ref_restaurante: {
		type: Schema.Types.ObjectId,
		ref: "Restaurant"
	},
	extras:[{
		type:Schema.Types.ObjectId,
		ref:"Extra"
	}],
	categorias:{
		type:Array
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

module.exports = mongoose.model("Platillo", PlatilloSchema);
