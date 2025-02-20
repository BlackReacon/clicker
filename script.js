/* selector */
let numbers_clicks = document.querySelector("#image");
let span_clicks = document.querySelector("#clicks");
let clicks = 0

/* eventlistener */
numbers_clicks.addEventListener("click", countUp);

/* function */
/* function - count clicks */
function countUp() {
  clicks = clicks + 1;

  generateHtml();
}

/* function - generate HTML with amount of clicks */
function generateHtml() {
    span_clicks.innerHTML = `${clicks}`;
}
