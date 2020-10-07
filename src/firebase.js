import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLbnGIFUUyH2TNuiP-hN4CN-EJeEH3sds",
  authDomain: "drgreen-8b4c7.firebaseapp.com",
  databaseURL: "https://drgreen-8b4c7.firebaseio.com",
  projectId: "drgreen-8b4c7",
  storageBucket: "drgreen-8b4c7.appspot.com",
  messagingSenderId: "668037442329",
  appId: "1:668037442329:web:a5d72a458ceabc791df388",
  measurementId: "G-S5E7V8B3KJ"
};

// Use the shorth and notation to access the default project's Firebase services
var storage = firebase.storage();
var db = firebase.firestore();
var auth = firebase.auth();

// Use the otherProject variable to access the second project's Firebase services
export { db, auth, storage };
