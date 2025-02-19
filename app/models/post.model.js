const { Schema } = require("mongoose");

const PostModel = new Schema({
    user_id: {
        type: String,
        required: true
    },
    post_type: {
        type: Number, //1-file,2-text
        required: true
    },
    post: {
        type: String,
        required: true
    },
});

module.exports = { PostModel }