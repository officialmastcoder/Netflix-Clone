// Function to retrieve the price from a cookie
function getPriceFromCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
}

//log the price that is retriving from the cookie
var Amnt = getPriceFromCookie('selectedPremiumId');
console.log('Price that is retrive from cookies :' +Amnt);

// Function to generate a unique order ID
function generateUniqueOrderId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000); // Use Math.random() here
  const orderId = `ORDS${timestamp}${random}`;
  return orderId;
}

console.log("Your order Id " + generateUniqueOrderId());

// Function to generate a checksum based on server-side logic
async function generateChecksum(data, key) {
  // Convert the data to a string
  var paramsString = Object.keys(data)
    .map(function(key) {
      return key + '=' + data[key];
    })
    .join('|');

  // Generate the salt
  var salt = generateRandomString(4);

  // Calculate the checksum using SHA-512
  var checksum = await sha512(paramsString, key, salt);

  return checksum;
}

// SHA-512 hashing function
async function sha512(str, key, salt) {
  var encoder = new TextEncoder();
  var dataUint8 = encoder.encode(str);
  var keyData = encoder.encode(key);
  var importedKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-512' },
    false,
    ['sign']
  );
  var signatureBuffer = await crypto.subtle.sign('HMAC', importedKey, dataUint8);
  var signatureArray = Array.from(new Uint8Array(signatureBuffer));
  var signatureHex = signatureArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  var checksum = signatureHex + salt;
  return checksum;
}

// Function to generate a random string
function generateRandomString(length) {
  var characters = '9876543210ZYXWVUTSRQPONMLKJIHGFEDCBAabcdefghijklmnopqrstuvwxyz!@#$_&';
  characters += 'zyxwvutsrqponmlkjihgfedcbaABCDEFGHIJKLMNOPQRSTUVWXYZ';
  characters += '1234567890!@#$%^&*()_+-=[]{}|;:,.<>?';

  var characterCount = characters.length;
  var randomString = '';

  for (var i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characterCount));
  }

  return randomString;
}

// parameter to generate checksum 
var data = {
  upiuid: 'paytmqr2810050501011vjmw66h68iw@paytm',
  token: '7e21e9-785d8c-c7eb40-19df3f-6034f0',
  orderId: generateUniqueOrderId(),
  txnAmount: Amnt, 
  txnNote: 'Test',
  callback_url: 'https://trustmyhost.in/trial/txnResult',
  custMobile: 7488843862,
  custEmail: 'anurage@gmail.com'
};

var secretKey = 'nezCqllWZN';
generateChecksum(data, secretKey)
  .then(checksum => {
    console.log('Generated Checksum:', checksum);
  })
  .catch(error => {
    console.error('Error generating checksum:', error);
  });

async function initiatePayment() {
  var price = getPriceFromCookie('selectedPremiumId');
  if (price) {
    var upiuid = "paytmqr2810050501011vjmw66h68iw@paytm";
    var token = "7e21e9-785d8c-c7eb40-19df3f-6034f0";
    var orderId = generateUniqueOrderId();
    var txnAmount = price;
    var txnNote = "Test";
    var callback_url = "https://trustmyhost.in/trial/txnResult";
    var cust_Mobile = 7488843862;
    var cust_Email = 'anurage@anurage.com';
    var gatewayType = "Normal";
    var TXN_URL = "https://trustmyhost.in/order/process";
    var form = document.createElement("form");
    form.method = "post";
    form.action = TXN_URL;

    var inputFields = [
      { name: "upiuid", value: upiuid },
      { name: "token", value: token },
      { name: "orderId", value: orderId },
      { name: "txnAmount", value: txnAmount },
      { name: "txnNote", value: txnNote },
      { name: "callback_url", value: callback_url },
      { name: "gatewayType", value: gatewayType },
      { name: "cust_Mobile", value: cust_Mobile },
      { name: "cust_Email", value: cust_Email },
    ];

    inputFields.forEach(function (field) {
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });

    // Calculate the checksum using your generateChecksum function
    var calculatedChecksum = await generateChecksum({
      upiuid: upiuid,
      token: token,
      orderId: orderId,
      txnAmount: txnAmount,
      txnNote: txnNote,
      callback_url: callback_url,
      cust_Mobile: cust_Mobile,
      cust_Email: cust_Email,
    }, secretKey);

    // Add the checksum parameter to the form
    var checksumInput = document.createElement("input");
    checksumInput.type = "hidden";
    checksumInput.name = "checksum";
    checksumInput.value = calculatedChecksum;
    form.appendChild(checksumInput);

    document.body.appendChild(form);
    form.submit();
  } else {
    alert("Price not found in cookies.");
  }
}

// Add an event listener to the "Pay" button with the ID "submit"
document.getElementById('paymentButton').addEventListener('click', initiatePayment);
