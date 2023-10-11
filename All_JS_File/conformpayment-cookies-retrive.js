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
  

// Function to replace the element with ID "pricechosen" with the chosen price
function replacePriceChosenElement(selectedPremiumId) {
    // Replace the element's content with the chosen price based on the selectedPremiumId
    const priceChosenElement = document.getElementById('pricechoosen');
  
    if (selectedPremiumId === '199') {
      priceChosenElement.textContent = ' ₹ 199 / Month'; // Replace with your actual price
    } else if (selectedPremiumId === '149') {
      priceChosenElement.textContent = ' ₹   149 / Month'; // Replace with your actual price
    } else if (selectedPremiumId === '99') {
      priceChosenElement.textContent = ' ₹   99 / Month'; // Replace with your actual price
    } else if (selectedPremiumId === '49') {
      priceChosenElement.textContent = ' ₹   49 / Month'; // Replace with your actual price
    } else {
      priceChosenElement.textContent = 'Price not selected'; // Handle the case where no premium ID is selected
    }
  }
  
  // Example usage: Retrieve the selected "premium" ID from the cookie
  const selectedPremiumIdFromCookie = getSelectedPremiumIdFromCookie();
  
  if (selectedPremiumIdFromCookie) {
    // Replace the element with ID "pricechosen" with the chosen price
    replacePriceChosenElement(selectedPremiumIdFromCookie);
  } else {
    // Handle the case where no premium ID is selected (e.g., show a default message)
    console.log('No premium ID selected');
  }
  

//   Upi Id will replace from upi that field by the user and retrive the data here

// Function to get the user's input value from the cookie
function getUserInputValueFromCookie() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('userInputValue=')) {
        // Extract the user's input value from the cookie
        return decodeURIComponent(cookie.substring('userInputValue='.length));
      }
    }
    // Return null if no user input value is found in the cookie
    return null;
  }
  
  // Example usage: Retrieve the user's input value from the cookie
  const userInputValueFromCookie = getUserInputValueFromCookie();
  
  // Get the element with id "upiidofcustomer"
  const upiidElement = document.getElementById('upiidofcustomer');

  
  
  // Check if a value was found in the cookie and update the element's content
  if (userInputValueFromCookie) {
    upiidElement.textContent = userInputValueFromCookie;
  } else {
    // Handle the case where no user input value is stored (e.g., show a default message)
    upiidElement.textContent = 'No user input value stored';
  }
  