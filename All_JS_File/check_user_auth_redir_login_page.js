// Initialize Firebase
// Replace with your Firebase configuration object
var firebaseConfig = {
    apiKey: "AIzaSyAzd7DEWXiEv9LRWokx39Z3i_sSv1woe6I",
    authDomain: "netflix-76ae9.firebaseapp.com",
    projectId: "netflix-76ae9",
    storageBucket: "netflix-76ae9.appspot.com",
    messagingSenderId: "582605216442",
    appId: "1:582605216442:web:e2574b4282a26b65cb8083",
    measurementId: "G-0M9L0PP5TZ"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Check if a user is signed in
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in. You can access user details with user.displayName, user.email, etc.
      // User is authenticated; continue with your application logic.
    } else {
      // No user is signed in. Redirect to the login page.
      window.location.replace('/home-page/index.html'); // Replace with the path to your login page
    }
  });
  