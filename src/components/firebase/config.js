import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD7enqRPcRtWwH81Ek6SraKwFmDF2OAMTE",
    authDomain: "studiopayal-198c9.firebaseapp.com",
    projectId: "studiopayal-198c9",
    storageBucket: "studiopayal-198c9.appspot.com",
    messagingSenderId: "149727670028",
    appId: "1:149727670028:web:b880e3a44833ffe06f6329"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const db = firebase.firestore();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp , db};