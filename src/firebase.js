import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCYI0MjI3zjff_2FktXw5RYPzLr5qIs2fQ",
  authDomain: "project-6321423145720335583.firebaseapp.com",
  databaseURL: "https://project-6321423145720335583.firebaseio.com",
  projectId: "project-6321423145720335583",
  storageBucket: "project-6321423145720335583.appspot.com",
  messagingSenderId: "770695429061"
};

firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();

export { database, auth, provider };
