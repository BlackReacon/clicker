/* selector */
let head = document.querySelector("#image");
let span_clicks = document.querySelector("#clicks");

/* var */
let clicks = 0;

/* eventlistener */
head.addEventListener("click", countUp);

/* function */
/* function - count clicks */
function countUp() {
  clicks = clicks + 1;

  blink();

  generateHtml();
}

/* function - generate HTML with amount of clicks */
function generateHtml() {
  span_clicks.innerHTML = `${clicks}`;
}

/* function - blink - change img on click */
function blink() {
  setTimeout(() => {
    head.src = "/src/img/Cat/Cat_1.png";
  }, 200);

  head.src = "/src/img/Cat/Cat_2.png";
}