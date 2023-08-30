import firebase from "firebase/app";
import "firebase/auth";

const signup = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

const signin = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

const signout = () => {
  return firebase.auth().signOut();
};
