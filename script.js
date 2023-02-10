/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/

var timer = null;

const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function () {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
    if (!timer) {
      setInterval(play, 2000);
      btn.textContent = "Stop";
    } else {
      clearInterval(play);
      btn.textContent = "Confuse Me 😵‍💫";
    }
  };
}

var audio;
var colours = [
  "https://cdn.glitch.global/d20a5759-f639-4653-9fe7-972fafdaa8a7/green.mp3?v=1676037998663",
  "https://cdn.glitch.global/d20a5759-f639-4653-9fe7-972fafdaa8a7/blue.mp3?v=1676037363221",
  "https://cdn.glitch.global/d20a5759-f639-4653-9fe7-972fafdaa8a7/red.mp3?v=1676038000527",
  "https://cdn.glitch.global/d20a5759-f639-4653-9fe7-972fafdaa8a7/purple.mp3?v=1676038002623",
];

function play() {
  var rand = Math.floor(Math.random() * 4);
  console.log(rand);
  audio = new Audio(colours[rand]).play();
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
