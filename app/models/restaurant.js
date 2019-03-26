import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const RestaurantSchema = new Schema({

    brandName: {
        type: String,
		required:true
    },
    address: {
        type: String,
		required:true
    },
    telephone: {
        type: String
    },
    position: {
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
		required:[true,'Es necesaria una ubicación con coordenadas']
    },
	menu: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Menu'
            }
     ],
    comments: {
        type: String
    },
    isSubsidiary: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (email) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
            },
            message: '{VALUE} is not a valid email address!',

        },
        required: [true, 'Email address required']
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
},
{
    versionKey: false,
    usePushEach: true
});

export default mongoose.model('Restaurant', RestaurantSchema);
