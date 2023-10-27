require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.send('Name: Steven Chow, ID: A01303062, COMP4964 midterm, Oct 27, 2023')
});

app.listen(port, () => {
    console.log("Server is listening on port " + port)
});
