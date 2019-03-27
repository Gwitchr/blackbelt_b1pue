const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
	user:{
		type:Schema.Types.ObjectId,
		ref:"User"
	},
	coordinates:{
		type:Array,
		required:true
	},
	name:{
		type:String,
		enum: ["Home", "Work", "Other"]
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

module.exports = mongoose.model("Location", LocationSchema);
