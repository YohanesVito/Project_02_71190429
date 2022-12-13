import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkP1bz6rRdOt2M0OWVg_pE_WbvVqbIn24",
  authDomain: "pwlfinal-745e8.firebaseapp.com",
  projectId: "pwlfinal-745e8",
  storageBucket: "pwlfinal-745e8.appspot.com",
  messagingSenderId: "416125074388",
  appId: "1:416125074388:web:44df2e65abb0d8d6827441"
};

// Initialize Firebase
export default initializeApp(firebaseConfig);

//SEND DATA
// const db = firestore.getFirestore(firebase);

// var sender = "yohanesvito"
// var receiver = "hiraimomo"
// var docId = ""
// var message = "hello"

// firestore.addDoc(firestore.collection(db, "chat", docId), {sender: sender, receiver: receiver, message: message});

// //GET DATA
// const docSnap = await firestore.getDoc(firestore.doc(db, "chat", docId));
// console.log("Document data:", docSnap.data());