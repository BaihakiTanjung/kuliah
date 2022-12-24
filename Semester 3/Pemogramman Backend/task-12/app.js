// import express
const express = require('express');
const router = require('./routes/index');
require('dotenv').config();

const { APP_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}...`));