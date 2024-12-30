import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import the Auth module

const firebaseConfig = {
  apiKey: "AIzaSyC8EUxGsrYIV9fuW5WVx-D1qB2wZUS9JWw",
  authDomain: "leadgenpro-d5264.firebaseapp.com",
  projectId: "leadgenpro-d5264",
  storageBucket: "leadgenpro-d5264.firebasestorage.app",
  messagingSenderId: "497839280406",
  appId: "1:497839280406:web:5314de0199d94883180037",
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