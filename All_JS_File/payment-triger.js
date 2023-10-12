function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  const selectedPremiumId = getCookie('selectedPremiumId');
console.log(selectedPremiumId) 

function makeJsonpRequest() {
    const script = document.createElement('script');
    script.src = 'https://api.rajatech24m.com/order/process?callback=handleResponse';
    document.body.appendChild(script);
  }
  
  function handleResponse(data) {
    console.log('Response from external API:', data);
  }
  
  // Trigger the JSONP request
  makeJsonpRequest();
  

document.getElementById('paymentButton').addEventListener('click', function () {
    // Define your payment request parameters
    const requestParameters = {
      upiuid: '54847', // Replace with your UPI Unique ID
      token: '580c29-1f1607-b68e52-df27fc-d4ff83', // Replace with your API Token
      orderId: 'ORDS123456', // Replace with your Unique ID
      txnAmount: selectedPremiumId, // Payment Amount (in ₹)
      txnNote: 'Test', // Your Message
      callback_url: 'http://justpay.cloud/txnResult', // Your Callback URL
      checksum: 'ghvsaf764t3w784tbjkegbjhdbgf==', // Replace with your checksum
    };
  
    // Send the payment request
    fetch('https://justpay.cloud/order/process', {
      method: 'POST',
      body: JSON.stringify(requestParameters),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the payment response here
        console.log('Payment Request Response:', data);
  
        // After payment, redirect the user to a new page
        window.location.href = '/maincontent/content.html';
      })
      .catch((error) => {
        console.error('Payment Request Error:', error);
      });
  });
  