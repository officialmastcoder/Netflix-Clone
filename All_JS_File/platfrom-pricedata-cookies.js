let selectedPremiumId = null; // Variable to store the selected "premium" ID

// Function to set a cookie with the selected "premium" ID
function setPremiumIdCookie(premiumId) {
  // Set the cookie with an expiration date (e.g., 7 days)
  const expirationDays = 7;
  const expires = new Date();
  expires.setDate(expires.getDate() + expirationDays);

  document.cookie = `selectedPremiumId=${premiumId}; expires=${expires.toUTCString()}; path=/;`;
}

// Function to get the selected "premium" ID from the cookie
function getSelectedPremiumIdFromCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('selectedPremiumId=')) {
      // Extract the selected "premium" ID from the cookie
      return cookie.substring('selectedPremiumId='.length);
    }
  }
  // Return null if no "premium" ID is found in the cookie
  return null;
}

// Function to handle div selection
function handleDivSelection(premiumId) {
  // Clear the previous selection by setting selectedPremiumId to null
  selectedPremiumId = null;

  // Set the new selected "premium" ID
  selectedPremiumId = premiumId;

  // Set the cookie with the new selected "premium" ID
  setPremiumIdCookie(selectedPremiumId);
}

// Example usage: Call handleDivSelection when a user selects a div
document.getElementById('price-649').addEventListener('click', function() {
  handleDivSelection('199');
});

document.getElementById('price-650').addEventListener('click', function() {
  handleDivSelection('149');
});

document.getElementById('third-box').addEventListener('click', function() {
  handleDivSelection('99');
});
document.getElementById('forth-box').addEventListener('click', function() {
  handleDivSelection('49');
});

// Example usage: Retrieve the selected "premium" ID on the payment page
const selectedPremiumIdFromCookie = getSelectedPremiumIdFromCookie();
if (selectedPremiumIdFromCookie) {
  // Use the selectedPremiumIdFromCookie variable for payment or display
  console.log(`Selected premium ID: ${selectedPremiumIdFromCookie}`);
} else {
  // Handle the case where no premium ID is selected (e.g., show a default message)
  console.log('No premium ID selected');
}
