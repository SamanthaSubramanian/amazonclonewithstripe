import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3XiVvAoZ-y1XS5pZZvaWB07JNilwUX6E",
    authDomain: "clone-9df87.firebaseapp.com",
    projectId: "clone-9df87",
    storageBucket: "clone-9df87.appspot.com",
    messagingSenderId: "586742429286",
    appId: "1:586742429286:web:11dfe6b5e15b7c4307dfa7",
    measurementId: "G-W0B93D85XB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const storage= firebase.storage();
  const auth = firebase.auth()
  

  export {db, auth,storage};