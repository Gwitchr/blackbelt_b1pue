const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PedidoSchema = new Schema ({
	ref_usuario:{
		type: mongoose.Types.ObjectId,
		required: true
	},
	ref_restaurante:{
		type: mongoose.Types.ObjectId,
		required: true
	},
	ref_repartidor:{
		type: mongoose.Types.ObjectId,
		required: true
	},
	platillos:[{
		type: String,
		required: true
	}],
	total:{
		type: Number,
		required: true
	},
	cordenadas_entrega:[{
		type: String,
		required: true
	}],
	tiempo_entrega:{
		type: String,
		required: true
	},
	costo_viaje:{
		type: Number,
		required: true
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

const Pedido = mongoose.model("Pedido", PedidoSchema);

module.exports = Pedido;