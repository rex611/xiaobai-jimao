const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const animation = document.getElementById("animation");
const runnerXiaobai = document.getElementById("runnerXiaobai");
const runnerJimao = document.getElementById("runnerJimao");
const hugGif = document.getElementById("hugGif");
const successMsg = document.getElementById("successMsg");

// Make "No" button jump away when hovered
noBtn.addEventListener("mouseover", () => {
  const x = (Math.random() * 300) - 150;
  const y = (Math.random() * 200) - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// When "Yes" is clicked → start animation sequence
yesBtn.addEventListener("click", () => {
  // Hide buttons
  document.querySelector(".buttons").classList.add("hidden");

  // Show animation area
  animation.classList.remove("hidden");

  // Make sure running GIFs are visible (they start playing immediately)
  runnerXiaobai.style.display = "block";
  runnerJimao.style.display = "block";

  // After 3.5 seconds → switch to hug GIF + show message
  // Change 3500 to match how long you want the running part to last
  // (e.g. 2000 = 2 seconds, 5000 = 5 seconds)
  setTimeout(() => {
    runnerXiaobai.style.display = "none";
    runnerJimao.style.display = "none";
    hugGif.classList.remove("hidden");
    successMsg.classList.remove("hidden");
  }, 3500);
});