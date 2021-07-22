const firebase = require('firebase');
const config = require('./config');

const DB = firebase.initializeApp(config.firebaseConfig);
module.exports = DB;
