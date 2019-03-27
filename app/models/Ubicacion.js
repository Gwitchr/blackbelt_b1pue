const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
	ref_user:{
		type:Schema.Types.ObjectId,
		ref:"User"
	},
	coordenadas:{
		type:Array,
		required:true
	},
	nombre:{
		type:String,
		enum: ["Home", "Work", "Other"]
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

module.exports = mongoose.model("Location", LocationSchema);
