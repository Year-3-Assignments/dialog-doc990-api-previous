import firebase from 'firebase';
import config from './config';

const DB = firebase.initializeApp(config.firebaseConfig);
module.exports = DB;
