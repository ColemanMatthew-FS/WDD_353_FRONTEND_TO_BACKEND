//this is basically a blueprint
//if the json submitted to the DB doesnt match these specifications
//(type of string, object names), it wont save
const mongoose = require("mongoose");
const registrationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    consent: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Registration", registrationSchema);