'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const h1 = document.createElement('h1');
const textNode = document.createTextNode('Digital Watch : ');
h1.appendChild(textNode);
document.body.appendChild(h1);

const h2 = document.createElement('h2');
document.body.appendChild(h2);
function addCurrentTime() {
  // TODO complete this function
  let date = new Date();
  let time = date.toLocaleTimeString('en-GB');

  // let hrs = date.getHours();
  // let mins = date.getMinutes();
  // let secs = date.getSeconds();

  // hrs = hrs < 10 ? '0' + hrs : hrs;
  // mins = mins < 10 ? '0' + mins : mins;
  // secs = secs < 10 ? '0' + secs : secs;

  // let time = `${hrs}:${mins}:${secs}`;

  document.querySelector('H2').textContent = time;
  setTimeout(addCurrentTime, 1000);
}

// TODO execute `addCurrentTime` when the browser has completed loading the page
window.addEventListener('load', addCurrentTime);
