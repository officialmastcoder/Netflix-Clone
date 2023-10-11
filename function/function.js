function myfunction(){
    document.getElementById('learnmore').innerHTML = "<br>The information collected by Google reCAPTCHA is <br> subject to the Google Privacy Policy and Terms of <br> Service, and is used for providing, maintaining, and <br> improving the reCAPTCHA service and for general <br> security purposes (it is not used for personalised <br> advertising by Google).";

}
function signout(){
    // "window.location.href='/registration/pass.html'";
    // window.location.href='/registration/pass.html';
    window.location.href='/registration/plan.html';
}



function setElementHeight(element, height) {
  element.style.height = height;
}
const myElement = document.getElementById('price-649');
setElementHeight(-649, '481px');


function changeStyle() {
  var element = document.getElementById("price-649");
  element.style.height = "481px";
  element.style.boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(128, 128, 128, 0.7) 0px 0px 0px 1px;";
  element.style.transition= "margin 250ms ease-in-out 0s, box-shadow 250ms ease-in-out 0s, border-color 250ms ease-in-out 0s;"
}


function upiwaitingbutton() {
  window.location.href="/maincontent/content.html";
}


