import firebase from "firebase";  
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDliN1RicILUR478leAqK2wN7wOvWg9kwg",
    authDomain: "homesapp-d7f61.firebaseapp.com",
    databaseURL: "https://homesapp-d7f61-default-rtdb.firebaseio.com",
    projectId: "homesapp-d7f61",
    storageBucket: "homesapp-d7f61.appspot.com",
    messagingSenderId: "599624906966",
    appId: "1:599624906966:web:d0f077ae3ed933d0783177",
    measurementId: "G-N9VZBTT6RK"
  });
  // Initialize Firebase
  const db = firebaseApp.firestore();
  
  export default db;
