const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExtraSchema = new Schema({
	name:{
		type:String
	},
	price:{
		type:Number
	},
	description:{
		type:String
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

module.exports = mongoose.model("Extra", ExtraSchema);
