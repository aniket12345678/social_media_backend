require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to Instagram' });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});