import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLbnGIFUUyH2TNuiP-hN4CN-EJeEH3sds",
  authDomain: "drgreen-8b4c7.firebaseapp.com",
  databaseURL: "https://drgreen-8b4c7.firebaseio.com",
  projectId: "drgreen-8b4c7",
  storageBucket: "drgreen-8b4c7.appspot.com",
  messagingSenderId: "668037442329",
  appId: "1:668037442329:web:a5d72a458ceabc791df388",
  measurementId: "G-S5E7V8B3KJ",
});

const db = firebaseApp.firestore();

export default db;
