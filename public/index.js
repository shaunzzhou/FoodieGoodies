// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  onValue,
  set,
  update,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// connect to the realtime database
const db = getDatabase();

// get a reference to the data 'title'
// const title = ref(db, "title");

// // when value of 'title' changes, update to our <h1 id='target'>
// onValue(title, (snapshot) => {
//   const data = snapshot.val(); // get the new value
//   document.getElementById("target").innerText = data;
// });

// connect to authentication
const auth = getAuth();

// signUp function
export function signUp() {
  let name = document.getElementById("registerName").value;
  let email = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;
  let confirmPassword = document.getElementById(
    "registerConfirmPassword"
  ).value;
  if (password != confirmPassword) {
    alert("Passwords are not the same!");
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let signUpUser = userCredential.user;
      alert("User Created!");
      set(ref(db, "users/" + signUpUser.uid), {
        name: name,
        email: email,
      });
      document.getElementById("status").innerText = "User Registration Done!";
    })
    .catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage);
      document.getElementById("status").innerText = "User Registration Failed!";
    });
}

// login function
export function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const dt = new Date();
      const user = userCredential.user;
      update(ref(db, "users/" + user.uid), {
        last_login: dt,
      });
      alert("User logged in");
      document.getElementById("status").innerText = "User logged in!";
      checkUser();
      window.location.replace("./landingPage.html");
    })
    .catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage);
      document.getElementById("status").innerText = "User login failed!";
    });
}

// check if user is logged in function
export function checkUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      onValue(ref(db, "users/" + uid), (snapshot) => {
        const uname = snapshot.val().name; // get the new value
        console.log(uname);
      });
    } else {
      window.location.replace("./404.html");
    }
  });
}
