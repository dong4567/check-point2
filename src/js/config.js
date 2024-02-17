// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1uPxJQ5uBOFWC0V86HagGKEaYxKwYNDo",
  authDomain: "check-point2-56d7f.firebaseapp.com",
  projectId: "check-point2-56d7f",
  storageBucket: "check-point2-56d7f.appspot.com",
  messagingSenderId: "408014937597",
  appId: "1:408014937597:web:06634ce84c252834adcd94",
  measurementId: "G-FBSKJW4KYV"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = firebase.firestore();