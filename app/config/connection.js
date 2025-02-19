const { default: mongoose } = require("mongoose");

async function newConnection() {
    try {
        await mongoose.connect();
        console.log('connection success');
    } catch (error) {
        console.log('connection failure');
    }
}