// import express
const express = require('express');
const router = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(3005, () => console.log('Listening on port 3000...'));