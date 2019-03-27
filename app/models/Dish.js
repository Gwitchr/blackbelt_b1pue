const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DishSchema = new Schema({
	name:{
		type: String,
		required:true
	},
	description:{
		type: String,
		required:true
	},
	pictures:{
		type: Array,
		required:true
	},
	ingredients:{
		type: Array,
		required:true
	},
	price:{
		type: Number,
		required:true
	},
	restaurant: {
		type: Schema.Types.ObjectId,
		ref: "Restaurant"
	},
	extra:[{
		type:Schema.Types.ObjectId,
		ref:"Extra"
	}],
	categories:{
		type:Array
	},
	active:{
		type: Boolean,
		default:true
	},
	created_at: {
		type: Date,
		default: Date.now()
	},
	updated_at: {
		type: Date,
		default: Date.now()
	}
}, {
	versionKey: false,
	usePushEach: true
});

module.exports = mongoose.model("Dish", DishSchema);
