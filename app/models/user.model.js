const { Schema } = require("mongoose");

const UserModel = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = { UserModel }