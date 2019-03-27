const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const RestaurantSchema = new Schema({
	categories:{
		type:Array
	},
	brandName: {
		type: String,
		required: true
	},
	street:{
		type: String,
		required: true
	},
	number:{
		type:String,
		required:true
	},
	postalCode:{
		type:String,
		required:true
	},
	neighborhood:{
		type:String,
		required:true
	},
	state:{
		type:String,
		required:true
	},
	city:{
		type:String,
		required:true
	},
	address: {
		type: String,
	},
	telephone: {
		type: String
	},
	commercialName: {
		type: String
	},
	web: {
		type: String
	},
	coordinates: {
		type: Array,
		required: [true, "Es necesaria una ubicación con coordenadas"]
	},
	menu: [{
		type: Schema.Types.ObjectId,
		ref: "Menu"
	}],
	comments: [{
		type: Schema.Types.ObjectId,
		ref: "Comment"
	}],
	bankData: {
		type: Schema.Types.ObjectId,
		ref: "PaymentMethod"
	},
	rating: {
		type: Number
	},
	isParentCompany: {
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

module.exports = mongoose.model("Restaurant", RestaurantSchema);
