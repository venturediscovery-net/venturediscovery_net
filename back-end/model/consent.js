import mongoose from "mongoose";


const ConsentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    userType: {
        type: String,
        required: true
    },

    userTypeSelected: {
        type: String,
        required: true
    },


})

const consent = mongoose.model('Consent', ConsentSchema);

export default consent;