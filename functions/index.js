const functions = require("firebase-functions");
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const endpoints = require('./src/endpoints');

dotenv.config();
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('<b>Dialog Doc 990 REST API</p>');
});

app.listen(PORT, () => {
  console.log(`API is up and running on url http://localhost:${PORT}`);
  endpoints(app);
});

exports.app = functions.region('asia-south1').https.onRequest(app);
