function changeStyle() {
    var element = document.getElementById("price-649");
    element.style.height = "481px";
    element.style.boxShadow =
        "rgba(0, 0, 0, 0.1) 0px 4px 8px 0px, rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(128, 128, 128, 0.7) 0px 0px 0px 1px;";
    element.style.transition =
        "margin 250ms ease-in-out 0s, box-shadow 250ms ease-in-out 0s, border-color 250ms ease-in-out 0s;";
    element.style.border = "2px solid rgba(128  , 128, 128, 0.4)";
    element.style.top = "5rem";
    document.getElementById("selected").innerHTML = "Selected";
}

function changeStyle1() {
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
    
}
function changeStyle2() {
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
}

function changeStyle4() {
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
}

// Get all elements with the class 'function-button'
const functionButtons = document.querySelectorAll(".price-650");

// Attach click event listeners to all function buttons
functionButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

// Click event listener function
function handleClick(event) {
    // Disable all other function buttons
    functionButtons.forEach((button) => {
        if (button !== event.target) {
            button.removeEventListener("click", handleClick);
            button.disabled = true; // Optionally, disable the button visually
        }
    });

    // Perform the action for the clicked function
    console.log(`You clicked: ${event.target.textContent}`);
    // ...perform your desired action here
}

// Target the button and SVG element
// const showSVGButton = document.getElementById('tick');
// const svgElement = document.getElementById('tick');

// // Add a click event listener to the button
// showSVGButton.addEventListener('click', function() {
//   // Toggle the SVG element's visibility by changing the display property
//   if (svgElement.style.display === 'none') {
//     svgElement.style.display = 'block'; // or 'inline' if preferred
//   } else {
//     svgElement.style.display = 'none';
//   }
// });
