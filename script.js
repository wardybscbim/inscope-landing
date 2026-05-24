const words = [
  "goals",
  "team",
  "project",
  "compliance",
  "progress"
];

let index = 0;

function updateRollingText() {
  index = (index + 1) % words.length;

  const wordOne = document.getElementById("rolling-word");
  const wordTwo = document.getElementById("rolling-word-2");

  if (wordOne && wordTwo) {
    wordOne.textContent = words[index];
    wordTwo.textContent = words[index];
  }
}

setInterval(updateRollingText, 2000);
