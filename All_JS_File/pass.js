import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

const firebaseConfig = {
  // Firebase config here
  apiKey: "AIzaSyAzd7DEWXiEv9LRWokx39Z3i_sSv1woe6I",
    authDomain: "netflix-76ae9.firebaseapp.com",
    projectId: "netflix-76ae9",
    storageBucket: "netflix-76ae9.appspot.com",
    messagingSenderId: "582605216442",
    appId: "1:582605216442:web:e2574b4282a26b65cb8083",
    measurementId: "G-0M9L0PP5TZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Retrieve stored data from the cookie
const storedData = getCookie('storedData');



// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const passInputBox = document.getElementById('passInputBox');

  if (storedData) {
    // Do something with the retrieved data
    passInputBox.value = storedData;
  } else {
    console.log('No data found in the cookie.');
  }

  // Example event listener for account creation
  document.getElementById('createAccountBtn').addEventListener('click', async function () {
    const email = storedData;
    const password = document.getElementById('password').value;

    // Validate email and password inputs here if needed

    // Check if the email already exists
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);

      if (methods && methods.length > 0) {
        // Email already exists, show an alert
        alert('Email already in use. Please choose a different email.');
        return; // Stop the registration process
      }
    } catch (error) {
      // Handle errors (e.g., network issues)
      console.error("Error:", error.code, error.message);
      alert("Kindly Check Your Email Address. Please try again later.");
      return; // Stop the registration process
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // User successfully created
      const user = userCredential.user;
      console.log("User created:", user);

      //cookies will Clear if sucess signin or account creation

      const cookies = document.cookie.split('; ');
      for (const cookie of cookies) {
        const [name] = cookie.split('=');
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }

      // Redirect to the next page
      // Replace the current history entry so the user can't navigate back
      // window.location.href = '/registration/plan.html';
      window.location.href=  '/registration/plan.html';
    } catch (error) {
      // Handle registration errors (e.g., weak password)
      console.error("Error:", error.code, error.message);
      alert('Kindly enter minimum with 6 Careters Your pass to proceed with your account');
    }
  });

  // Listen for the authentication state change
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      // Do something here, such as redirecting to another page
    } else {
      // User is logged out
      // Do something here, such as displaying an error message
    }
  });
});

const homeinputBox = document.getElementById('homeinputBox');
const homeBtn = document.getElementById('homeBtn');
const finishedBtn = document.getElementById('finished');

if (storedData) {
  // Data is stored, hide input and "Next" button, show "Finished" button
  homeinputBox.style.display = 'none';
  homeBtn.style.display = 'none';
  finishedBtn.style.display = 'block';
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
