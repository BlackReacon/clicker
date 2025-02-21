/* selector */
let head = document.querySelector("#image");
let span_clicks = document.querySelector("#clicks");
let span_level = document.querySelector("#level");

/* var */
let clicks = 0;
let level = 0;

/* eventlistener */
head.addEventListener("click", callFunction);

/* function */
function callFunction() {
  countUp();

  blink();

  levelup();

  generateHtml();
}

/* function - count clicks */
function countUp() {
  clicks = clicks + 1;
}

/* function - blink - change img on click */
function blink() {
  setTimeout(() => {
    head.src = "/src/img/Cat/Cat_1.png";
  }, 200);

  head.src = "/src/img/Cat/Cat_2.png";
}

/* function - level up */
function levelup() {
  if (clicks % 10 == 0) {
    level = level + 1;
  }
}

/* function - generate HTML with amount of clicks */
function generateHtml() {
  span_clicks.innerHTML = `${clicks}`;
  span_level.innerHTML = `${level}`;
}