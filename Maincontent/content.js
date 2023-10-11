// const sliderList = document.querySelector('.slider-list');
// let slideIndex = 0;

// function slideNext() {
//   slideIndex++;
//   if (slideIndex >= sliderList.children.length) {
//     slideIndex = 0;
//   }
//   sliderList.style.transform = `translateX(-${slideIndex * 100}%)`;
// }

// setInterval(slideNext, 3000);









// const timeoutDuration = 30000; // 30 seconds
// let timeoutId;

// function showScreen() {
//   // Code to display the screen or perform any actions goes here
//   console.log("Screen appeared!");
// }

// function startTimeout() {
//   timeoutId = setTimeout(() => {
//     window.location.href = "https://google.com/"; // Replace with your desired redirect URL
//   }, timeoutDuration);
// }

// function resetTimeout() {
//   clearTimeout(timeoutId);
//   startTimeout();
// }

// document.addEventListener("visibilitychange", function() {
//   if (document.visibilityState === "visible") {
//     resetTimeout();
//   } else {
//     clearTimeout(timeoutId);
//   }
// });

// startTimeout();

//rrr font size



// Get the video element
const video = document.getElementById("video"); // Replace "my-video" with the ID of your video element

// Function to stop the video and hide it
function stopAndHideVideo() {
  video.pause(); // Pause the video playback
  video.style.display = "none"; // Hide the video by setting its display property to "none"
}

// Wait for 10 seconds and then stop and hide the video
setTimeout(stopAndHideVideo, 40000); // 10000 milliseconds = 10 seconds


// Get the SVG and video elements
const svgElement = document.getElementById("mute"); // Replace "my-svg" with the ID of your SVG element
const videox = document.getElementById("video"); // Replace "my-video" with the ID of your video element


// Function to unmute the video
function unmuteVideo() {
  videox.muted = false; // Set the muted property to false to unmute the video
  
}

// Add a click event listener to the SVG element
svgElement.addEventListener("click", unmuteVideo);

//======================svg changed======================

// Get the SVG elements
const svgElementx = document.getElementById("mute"); // Replace "my-svg" with the ID of your initial SVG element
const replacementSvgElement = document.getElementById("unmute"); // Replace "replacement-svg" with the ID of your replacement SVG element
 // Function to change the SVG and replace it
function changeAndReplaceSVG() {
  // Modify the attributes of the initial SVG element
  svgElementx.setAttribute("fill", "red");
  svgElementx.setAttribute("stroke", "blue");
  // Replace the initial SVG element with the replacement SVG element
  svgElementx.parentNode.replaceChild(replacementSvgElement, svgElementx);
  
}
 // Add a click event listener to the SVG element
svgElement.addEventListener("click", changeAndReplaceSVG);

//===============uments================================

// Get the SVG element


//=========================replays================================

// Get the video element and SVG elements
const videoElement = document.getElementById("video"); // Replace "my-video" with the ID of your video element
const svgElementv = document.getElementById("mute"); // Replace "my-svg" with the ID of your initial SVG element
const newSvgElement = document.getElementById("replay"); // Replace "new-svg" with the ID of your new SVG element
 // Function to replace the SVG element with a new SVG
function replaceSVG() {
  svgElementv.parentNode.replaceChild(newSvgElement, svgElementv);
}
 // Add an event listener to the video element
videoElement.addEventListener("ended", replaceSVG);



//========================header Black on Scroll================================================




//======================Moreinfo button================================================


const button = document.getElementById('moreinfo');
const div = document.getElementById('overlay');

button.addEventListener('click', function() {
  if (div.style.display === 'none') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
});

// home.js



// ...
