const { getFirestore } = require('firebase/firestore/lite');
const { initializeApp } = require('firebase/app');
const firebaseConfig = {
  apiKey: "AIzaSyDzO7eRdbbevBlVfoIfaUhj1Fe7OLlgIDE",
  authDomain: "agenda-fecc1.firebaseapp.com",
  projectId: "agenda-fecc1",
  storageBucket: "agenda-fecc1.appspot.com",
  messagingSenderId: "785698021890",
  appId: "1:785698021890:web:e15348e3bc1f8adf14fd1b"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

module.exports = db;