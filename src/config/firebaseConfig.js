import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import the Auth module

const firebaseConfig = {
  apiKey: "AIzaSyAlG5qT3cy38na77KmIBTxb3lNnNU-JGgw",
  authDomain: "login-auth-93224.firebaseapp.com",
  databaseURL: "https://login-auth-93224-default-rtdb.firebaseio.com",
  projectId: "login-auth-93224",
  storageBucket: "login-auth-93224.firebasestorage.app",
  messagingSenderId: "414344780518",
  appId: "1:414344780518:web:47bd8349022199816cb927"
};



// {
//   apiKey: "AIzaSyDaphWlw4nMfsisKW9nU-HK9oTwXnq_DJQ",
//   authDomain: "leadgenpro-d5264.firebaseapp.com",
//   projectId: "leadgenpro-d5264",
//   storageBucket: "leadgenpro-d5264.firebasestorage.app",
//   messagingSenderId: "497839280406",
//   appId: "1:497839280406:web:5314de0199d94883180037",
//   measurementId: "G-9ZYFVMJ8R6"
// }
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth

export { auth };