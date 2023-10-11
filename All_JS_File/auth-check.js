// This Function Check if user is login or account creation is successful or not 
//if not redict to login page

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyAzd7DEWXiEv9LRWokx39Z3i_sSv1woe6I",
    authDomain: "netflix-76ae9.firebaseapp.com",
    projectId: "netflix-76ae9",
    storageBucket: "netflix-76ae9.appspot.com",
    messagingSenderId: "582605216442",
    appId: "1:582605216442:web:e2574b4282a26b65cb8083",
    measurementId: "G-0M9L0PP5TZ"
};

// Initialize Firebase
const auth = getAuth();

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // User is not signed in, redirect to the login page
    window.location.href = 'https://google.com'; // Change to the actual login page URL
  }
});

  