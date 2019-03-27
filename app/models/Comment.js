const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	text:{
		type:String,
		required:true
	},
	rating:{
		type:Number,
		required:true
	},
	restaurant:{
		type:Schema.Types.ObjectId,
		ref:"Restaurant"
	},
	user:{
		type:Schema.Types.ObjectId,
		ref:"User"
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

module.exports = mongoose.model("Comment", CommentSchema);
