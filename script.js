/* selector */
let head = document.querySelector("#image");
let span_clicks = document.querySelector("#clicks");
let span_level = document.querySelector("#level");
let divProgress = document.querySelector("#progress");
let divGrowUp = document.querySelector("#growup");

/* var */
let clicks = 0;
let level = 0;
let eyeIndex = 0;
let progress = 0;
let clicksUntilCurrentLevel = 0;
let clickInCurrentLevel = 0;

/* array */
eyeOpen = [
  "/src/img/Cat/Cat_1.png",
  "/src/img/Rabbit/Rabbit_1.png",
  "/src/img/Sheep/Sheep_1.png",
  "/src/img/Pig/Pig_1.png",
  "/src/img/Rainbow/Rainbow_1.png",
  "/src/img/Lizard/Lizard_1.png",
  "/src/img/Octopus/Octopus_1.png",
  "/src/img/Owl/Owl_1.png",
  "/src/img/Unicorn/Unicorn_1.png",
  "/src/img/Dragon/Head_1.png",
];

eyeClose = [
  "/src/img/Cat/Cat_2.png",
  "/src/img/Rabbit/Rabbit_2.png",
  "/src/img/Sheep/Sheep_2.png",
  "/src/img/Pig/Pig_2.png",
  "/src/img/Rainbow/Rainbow_2.png",
  "/src/img/Lizard/Lizard_2.png",
  "/src/img/Octopus/Octopus_2.png",
  "/src/img/Owl/Owl_2.png",
  "/src/img/Unicorn/Unicorn_2.png",
  "/src/img/Dragon/Head_2.png",
];

/* eventlistener */
head.addEventListener("click", callFunction);

/* function - call function for head eventlistener*/
function callFunction() {
  countUp();
  levelProgress();
  blink();
  levelUp();
  generateHtml();
}

/* function - count clicks */
function countUp() {
  clicks = clicks + 1;
}

/* function - calculate level progress and change img */
function levelProgress() {
  clicksUntilCurrentLevel = 5 * level * (level + 1);
  clickInCurrentLevel = level + 1;
  if (progress >= 99) {
    progress = 0;
    eyeIndex = Math.floor(Math.random() * eyeOpen.length);
  } else {
    progress = ((clicks - clicksUntilCurrentLevel) / clickInCurrentLevel) * 10;
  }
}

/* function - blink - change img on click and grow short */
function blink() {
  setTimeout(() => {
    head.src = eyeOpen[eyeIndex];
    divGrowUp.classList.remove("changeSize");
  }, 50);

  head.src = eyeClose[eyeIndex];
  divGrowUp.classList.add("changeSize");
}

/* function - level up */
function levelUp() {
  while (5 * level * (level + 1) <= clicks) {
    level += 1;
    
  }
  return (level = level - 1);
}

/* function - generate HTML with amount of clicks */
function generateHtml() {
  span_clicks.innerHTML = `${clicks}`;
  span_level.innerHTML = `${level}`;
  divProgress.style.width = `${progress}%`;
}
