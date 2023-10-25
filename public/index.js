// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa8KSaPoutvNzQyCKC-1QBOLzWBhCmhyY",
  authDomain: "wad2-project-eb2e7.firebaseapp.com",
  databaseURL:
    "https://wad2-project-eb2e7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wad2-project-eb2e7",
  storageBucket: "wad2-project-eb2e7.appspot.com",
  messagingSenderId: "816210275459",
  appId: "1:816210275459:web:b9984b2f681463def03fb6",
  measurementId: "G-E43B8MCPGH",
};

// index.html
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
export const auth = getAuth();
export {
  set,
  ref,
  update,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
