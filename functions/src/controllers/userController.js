// THIS IS SAMPLE CODE
const firebase = require('../config/dbConfig');
const User = require('../models/User');
const enums = require('./enums');
const FIRESTORE = firebase.firestore();

async function createUser(req, res) {
  try {
    await FIRESTORE.collection(enums.USERS).doc().set(req.body);
    res.status(200).json(enums.INSERT.SUCCESS);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function getAllUsers(req, res) {
  try {
    const userCollection = await FIRESTORE.collection(enums.USERS);
    const userData = await userCollection.get();
    const users = [];

    if (!userData.empty) {
      userData.forEach((userDoc) => {
        const user = new User(
          userDoc.id,
          userDoc.data().firstName,
          userDoc.data().lastName,
          userDoc.data().email,
          userDoc.data().phoneNumber
        );
        users.push(user);
      });
      res.status(200).json(users);
    } else {
      res.status(404).json(enums.GET.NOTFOUND);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function updateUser(req, res) {
  try {
    const user = await FIRESTORE.collection(enums.USERS).doc(req.params.id);
    if (user) {
      await user.update(req.body);
      res.status(200).json(enums.UPDATE.SUCCESS);
    } else {
      res.status(404).json(enums.UPDATE.NOTFOUND);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await FIRESTORE.collection(enums.USERS).doc(req.params.id);
    if (user) {
      await user.delete();
      res.status(200).json(enums.DELETE.SUCCESS);
    } else {
      res.status(404).json(enums.DELETE.NOTFOUND);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
};