// THIS IS SAMPLE CODE
import firebase from '../config/dbConfig';
import User from '../models/User';
import enums from './enums';
const FIRESTORE = firebase.firestore();

export async function createUser(req, res) {
  try {
    await FIRESTORE.collection(enums.user).doc().set(req.body);
    res.status(200).json(enums.insert.sussess);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export async function getAllUsers(req, res) {
  try {
    const userCollection = await FIRESTORE.collection(enums.user);
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
      res.status(404).json(enums.get.notfound);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export async function updateUser(req, res) {
  try {
    const user = await FIRESTORE.collection(enums.user).doc(req.params.id);
    if (user) {
      await user.update(req.body);
      res.status(200).json(enums.update.success);
    } else {
      res.status(404).json(enums.get.notfound);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export async function deleteUser(req, res) {
  try {
    const user = await FIRESTORE.collection(enums.user).doc(req.params.id);
    if (user) {
      await user.delete();
      res.status(200).json(enums.delete.success);
    } else {
      res.status(404).json(enums.get.notfound);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}
