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
let orderid = generateUniqueOrderId();
// parameter to generate checksum 
var data = {
  upifast_secret: 'nezCqllWZN',
  gateway_auth_key: 'test_token_new',
  upiuid: 'paytmqr2810050501011vjmw66h68iw@paytm',
  token: '7e21e9-785d8c-c7eb40-19df3f-6034f0',
  orderId: orderid,
  txnAmount: Amnt, 
  txnNote: 'Test',
  callback_url: 'http://127.0.0.1:5500/home-page/forgetpasswordhelper/conformpayment.html',
  cust_Mobile: 7488843862,
  cust_Email: 'anurage@gmail.com'
};
// generate CheckSum using API
  var checksum = '';
  var jsonData = JSON.stringify(data);
  $.ajax({
      type: "GET",
      url: "https://apizone.in/api/v6/generateChecksum.php",
      data: {param_list:jsonData},
      success: function(response){
        console.log(response);
        let resData = JSON.parse(response);
        checksum = resData.checksum;
      }
    });

async function initiatePayment() {
  var price = getPriceFromCookie('selectedPremiumId');
  if (price) {
    var upiuid = data.upiuid;
    var token = data.token;
    var orderId = data.orderId;
    var txnAmount = data.txnAmount;
    var txnNote = data.txnNote;
    var callback_url = data.callback_url;
    var cust_Mobile = data.cust_Mobile;
    var cust_Email = data.cust_Email;
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
      { name: "cust_Mobile", value: cust_Mobile },
      { name: "cust_Email", value: cust_Email },
      { name: "checksum", value: checksum },
    ];

    inputFields.forEach(function (field) {
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
  } else {
    alert("Price not found in cookies.");
  }
}
// Add an event listener to the "Pay" button with the ID "submit"
document.getElementById('paymentButton').addEventListener('click', initiatePayment);
