const words = ["goals", "team", "project", "compliance", "progress"];

let index = 0;

function updateRollingText() {
  const word = document.getElementById("rolling-word");

  if (!word) return;

  index = (index + 1) % words.length;
  word.textContent = words[index];
}

setInterval(updateRollingText, 2000);
