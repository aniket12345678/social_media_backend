const { Schema } = require("mongoose");

const UserDetailsModel = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
});

module.exports = { UserDetailsModel }