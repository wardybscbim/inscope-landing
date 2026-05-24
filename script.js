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

  const word = document.getElementById("rolling-word");

  if (word) {
    word.textContent = words[index];
  }
}

setInterval(updateRollingText, 2000);
