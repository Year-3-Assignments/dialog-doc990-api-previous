const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const config = require('./src/config/config');
const endpoints = require('./src/endpoints');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('<b>Dialog Doc 990 REST API</p>');
});

app.listen(config.port, () => {
  console.log(`API is up and running on url http://localhost:${config.port}`);
  endpoints(app);
});