// Function to set a cookie with the user's input value
function setInputValueCookie() {
    const inputValue = document.getElementById('upiidbyuser').value;
  
    // Set the cookie with an expiration date (e.g., 7 days)
    const expirationDays = 7;
    const expires = new Date();
    expires.setDate(expires.getDate() + expirationDays);
  
    document.cookie = `userInputValue=${inputValue}; expires=${expires.toUTCString()}; path=/;`;
  }
  
  // Example usage: Call setInputValueCookie when the button is clicked
  document.getElementById('startmem').addEventListener('click', function() {
    setInputValueCookie();
    window.location.href='/home-page/forgetpasswordhelper/conformpayment.html';
    
  });
  