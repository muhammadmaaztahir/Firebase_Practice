// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuL2lupMRpnxS9P_Px8tEikMD4RgnbS6Q",
  authDomain: "ecommerce-29f3c.firebaseapp.com",
  databaseURL: "https://ecommerce-29f3c-default-rtdb.firebaseio.com",
  projectId: "ecommerce-29f3c",
  storageBucket: "ecommerce-29f3c.appspot.com",
  messagingSenderId: "195553876092",
  appId: "1:195553876092:web:aa886a4ed922460e3e91f9",
  measurementId: "G-YMZ2LYF6EL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
