import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import config from './config';
import endpoints from './endpoints';

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