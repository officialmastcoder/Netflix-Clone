import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

const firebaseConfig = {
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

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // User successfully logged in
        const user = userCredential.user;
        console.log("User logged in:", user);

        // Redirect to the dashboard or next page
        window.location.href = '/maincontent/content.html';
    } catch (error) {
        // Handle errors (e.g., invalid login credentials)
        console.error("Error:", error.code, error.message);
        alert("Login failed. Please check your credentials.");
    }
});

// After successful login
setSessionToken(); // Implement this function to set a session token or cookie

// Redirect to the home page or another protected page
window.location.href = '/home-page/index.html'; // Replace with the desired redirect URL


