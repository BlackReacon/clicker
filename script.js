/* selector */
let numbers_clicks = document.querySelector("#image");
let clicks = 0;

/* eventlistener */
numbers_clicks.addEventListener("click", countUp);

/* function */
/* count clicks */
function countUp() {
  clicks = numbers_clicks.value + 1;
  console.log(numbers_clicks.value);
}
