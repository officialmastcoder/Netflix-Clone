import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to sign out the user
function signOutUser() {
    signOut(auth)
        .then(() => {
            // Sign-out successful
            console.log('User signed out');
            // Redirect to a page or perform any other desired actions after sign-out
            window.location.href = '/home-page/index.html'; // Replace with your desired redirect URL
        })
        .catch((error) => {
            // An error occurred during sign-out
            console.error('Sign-out error:', error);
        });
}

// Example: Add an event listener to a "Sign Out" button
document.getElementById('signout').addEventListener('click', () => {
    signOutUser();
});
