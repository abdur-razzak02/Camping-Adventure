// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const auth = getAuth(app);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByxqMPmn4pfsrED86dluzQNV5U3Nne9f0",
  authDomain: "camping-adventure-1c572.firebaseapp.com",
  projectId: "camping-adventure-1c572",
  storageBucket: "camping-adventure-1c572.firebasestorage.app",
  messagingSenderId: "921505799595",
  appId: "1:921505799595:web:eec80000982283f9a486ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);