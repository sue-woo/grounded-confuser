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
btn.onclick = function () {
  btn.classList.toggle("dipped");
  if (!timer) {
    timer = setInterval(play, 2000);
    btn.textContent = "Stop";
  } else {
    clearInterval(timer);
    timer = null;
    btn.textContent = "Confuse Me 😵‍💫";
  }
};

var audio;
var colours = [
  "./green.mp3?",
  "./blue.mp3?",
  "./red.mp3?",
  "./purple.mp3",
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
