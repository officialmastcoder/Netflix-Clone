let activeFunction = 0; // Variable to track the active function (0 for none)

function changeStyle(activeId) {
  // Deactivate the previously active function
  if (activeFunction === 1) {
    // Deactivate function 1 (changeStyle)
    document.getElementById("price-649").style.removeProperty("height");
    document.getElementById("selected").innerHTML = "";
    document.getElementById("q1").style.removeProperty("color");
    document.getElementById("q2").style.removeProperty("color");
    document.getElementById("q3").style.removeProperty("color");
    document.getElementById("q4").style.removeProperty("color");

    // Reset other style properties and content here
  } else if (activeFunction === 2) {
    // Deactivate function 2 (changeStyle1)
    document.getElementById("price-650").style.removeProperty("height");
    document.getElementById("selected1").innerHTML = "";
    document.getElementById("purple").style.removeProperty("color");
    document.getElementById("purple1").style.removeProperty("color");
    document.getElementById("purple2").style.removeProperty("color");
    document.getElementById("purple3").style.removeProperty("color");

    // Reset other style properties and content here
  } else if (activeFunction === 3) {
    // Deactivate function 3 (changeStyle2)
    document.getElementById("third-box").style.removeProperty("height");
    document.getElementById("selected2").innerHTML = "";
    document.getElementById("liteblue").style.removeProperty("color");
    document.getElementById("liteblue1").style.removeProperty("color");
    document.getElementById("liteblue2").style.removeProperty("color");
    document.getElementById("liteblue3").style.removeProperty("color");

    // Reset other style properties and content here
  } else if (activeFunction === 4) {
    // Deactivate function 4 (changeStyle4)
    document.getElementById("forth-box").style.removeProperty("height");
    document.getElementById("selected4").innerHTML = "";
    document.getElementById("blue").style.removeProperty("color");
    document.getElementById("blue1").style.removeProperty("color");
    document.getElementById("blue2").style.removeProperty("color");
    document.getElementById("blue3").style.removeProperty("color");

    // Reset other style properties and content here
  }

  // Activate the selected function
  if (activeId === 1) {
    // Activate function 1 (changeStyle)
    var element = document.getElementById("price-649");
    let premium = document.getElementById("premium");
    element.style.height = "481px";
    element.style.boxShadow =
      "rgba(0, 0, 0, 0.1) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(128, 128, 128, 0.7) 0px 0px 0px 1px;";
    element.style.transition =
      "margin 250ms ease-in-out 0s, box-shadow 250ms ease-in-out 0s, border-color 250ms ease-in-out 0s;";
    element.style.border = "2px solid rgba(128  , 128, 128, 0.4)";
    element.style.top = "5rem";
    document.getElementById("selected").innerHTML = "Selected";
    // document.getElementsByClassName('q').style.color="rgb(229,9,20)";
    document.getElementById("q1").style.color = "rgb(229,9,20)";
    document.getElementById("q2").style.color = "rgb(229,9,20)";
    document.getElementById("q3").style.color = "rgb(229,9,20)";
    document.getElementById("q4").style.color = "rgb(229,9,20)";

   

    

    // Set other style properties and content here
  } else if (activeId === 2) {
    // Activate function 2 (changeStyle1)
    var element = document.getElementById("price-650");
    element.style.height = "481px";
    element.style.boxShadow =
      "rgba(0, 0, 0, 0.1) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(128, 128, 128, 0.7) 0px 0px 0px 1px;";
    element.style.transition =
      "margin 250ms ease-in-out 0s, box-shadow 250ms ease-in-out 0s, border-color 250ms ease-in-out 0s;";
    element.style.border = "2px solid rgba(128  , 128, 128, 0.4)";
    element.style.top = "5rem";
    document.getElementById("selected1").innerHTML = "Selected";
    document.getElementById("purple").style.color = "rgb(176, 56, 220)";
    document.getElementById("purple1").style.color = "rgb(176, 56, 220)";
    document.getElementById("purple2").style.color = "rgb(176, 56, 220)";
    document.getElementById("purple3").style.color = "rgb(176, 56, 220)";

    // Set other style properties and content here
  } else if (activeId === 3) {
    // Activate function 3 (changeStyle2)
    var element = document.getElementById("third-box");
    element.style.height = "481px";
    element.style.boxShadow =
      "rgba(0, 0, 0, 0.1) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(128, 128, 128, 0.7) 0px 0px 0px 1px;";
    element.style.transition =
      "margin 250ms ease-in-out 0s, box-shadow 250ms ease-in-out 0s, border-color 250ms ease-in-out 0s;";
    element.style.border = "2px solid rgba(128  , 128, 128, 0.4)";
    element.style.top = "5rem";
    document.getElementById("selected2").innerHTML = "Selected";
    document.getElementById("liteblue").style.color = "rgb(109, 59, 227)";
    document.getElementById("liteblue1").style.color = "rgb(109, 59, 227)";
    document.getElementById("liteblue2").style.color = "rgb(109, 59, 227)";
    document.getElementById("liteblue3").style.color = "rgb(109, 59, 227";

    // Set other style properties and content here
  } else if (activeId === 4) {
    // Activate function 4 (changeStyle4)
    var element = document.getElementById("forth-box");
    element.style.height = "481px";
    element.style.boxShadow =
      "rgba(0, 0, 0, 0.1) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(128, 128, 128, 0.7) 0px 0px 0px 1px;";
    element.style.transition =
      "margin 250ms ease-in-out 0s, box-shadow 250ms ease-in-out 0s, border-color 250ms ease-in-out 0s;";
    element.style.border = "2px solid rgba(128  , 128, 128, 0.4)";
    element.style.top = "5rem";
    document.getElementById("selected4").innerHTML = "Selected";
    document.getElementById("blue").style.color = "rgb(33, 114, 227)";
    document.getElementById("blue1").style.color = "rgb(33, 114, 227)";
    document.getElementById("blue2").style.color = "rgb(33, 114, 227)";
    document.getElementById("blue3").style.color = "rgb(33, 114, 227)";

    // Set other style properties and content here
  }

  activeFunction = activeId; // Update the active function
}

// Add event listeners to trigger the changeStyle function when a div is clicked
document.getElementById("price-649").addEventListener("click", function () {
  changeStyle(1);
});

document.getElementById("price-650").addEventListener("click", function () {
  changeStyle(2);
});

document.getElementById("third-box").addEventListener("click", function () {
  changeStyle(3);
});

document.getElementById("forth-box").addEventListener("click", function () {
  changeStyle(4);
});


