const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        maxlength: 100,
        required: true,
    },
    city: {
        type: String,
    },
    email: {
        type: String,
    },
    rideInGroup: String,
    daysWeek: Array,
}, { timestamps: true});

const model = mongoose.model('User', schema);
export const BatchSchema = model.schema;
export default model;
