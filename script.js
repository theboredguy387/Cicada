const clock = document.getElementById("clock");
function tick() {
  const d = new Date();
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  clock.textContent = `${String(h).padStart(2,"0")}:${m} ${ampm}`;
}
tick();
setInterval(tick, 1000);

const status = document.getElementById("status");
const rotator = document.getElementById("rotator");

const taunts = [
  "Refused.",
  "No.",
  "You can't close it.",
  "It's still here.",
  "Try again."
];
const rotators = [
  "You won't hear it coming.",
  "It was already here.",
  "Seventeen years, then this.",
  "Underground, then everywhere.",
  "You let it in."
];

document.getElementById("close-btn").addEventListener("click", () => {
  status.textContent = taunts[Math.floor(Math.random() * taunts.length)];
  setTimeout(() => { status.textContent = "It was already here."; }, 2200);
});

setInterval(() => {
  if (status.textContent === "It was already here.") {
    rotator.textContent = rotators[Math.floor(Math.random() * rotators.length)];
  }
}, 6000);
