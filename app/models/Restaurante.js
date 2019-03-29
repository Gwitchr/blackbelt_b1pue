const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const RestauranteSchema = new Schema({
	categorias:{
		type:Array
	},
	nombre_marca: {
		type: String,
		required: true
	},
	calle:{
		type: String,
		required: true
	},
	numero:{
		type:String,
		required:true
	},
	codigo_postal:{
		type:String,
		required:true
	},
	colonia:{
		type:String,
		required:true
	},
	estado:{
		type:String,
		required:true
	},
	ciudad:{
		type:String,
		required:true
	},
	domicilio: {
		type: String,
	},
	telefono: {
		type: String
	},
	nombre_comercial: {
		type: String
	},
	sitioweb: {
		type: String
	},
	coordenadas: {
		type: Array,
		required: [true, "Es necesaria una ubicación con coordenadas"]
	},
	menu: [{
		type: Schema.Types.ObjectId,
		ref: "Platillo"
	}],
	comentarios: [{
		type: Schema.Types.ObjectId,
		ref: "Comentario"
	}],
	metodo_pago: [{
		type: Schema.Types.ObjectId,
		ref: "PaymentMethod"
	}],
	valoracion: {
		type: Number
	},
	es_matriz: {
		type: Boolean
	},
	email: {
		type: String,
		unique: true,
		validate: {
			validator: (email)=> /^([\w-]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email),
			message: "{VALUE} is not a valid email address!",

		},
		required: [true, "Email address required"]
	},
	// Borrado Lógico
	activo: {
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

module.exports = mongoose.model("Restaurante", RestauranteSchema);
