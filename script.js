const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const animation = document.getElementById("animation");
const runnerXiaobai = document.getElementById("runnerXiaobai");
const runnerJimao = document.getElementById("runnerJimao");
const hugGif = document.getElementById("hugGif");
const successMsg = document.getElementById("successMsg");

// Function to start the dogs animation
function startAnimation() {
  document.querySelector(".buttons").classList.add("hidden");
  animation.classList.remove("hidden");

  runnerXiaobai.style.display = "block";
  runnerJimao.style.display = "block";

  setTimeout(() => {
    runnerXiaobai.style.display = "none";
    runnerJimao.style.display = "none";
    hugGif.classList.remove("hidden");
    successMsg.classList.remove("hidden");
  }, 3500); // adjust if your GIFs need more/less time
}

// Clicking YES → go straight to animation
yesBtn.addEventListener("click", () => {
  startAnimation();
});

// Clicking NO → pixel-dissolve + swap + then animation
noBtn.addEventListener("click", () => {
  // Start dissolve out
  yesBtn.classList.add("pixel-dissolve-out");
  noBtn.classList.add("pixel-dissolve-out");

  // Wait most of the dissolve-out before swapping
  setTimeout(() => {
    // Swap text and colors
    yesBtn.textContent = "No 😢";
    noBtn.textContent = "Yes 💕";
    yesBtn.style.background = "#ff6b6b";
    noBtn.style.background = "#51cf66";

    // Reset for incoming animation
    yesBtn.classList.remove("pixel-dissolve-out");
    noBtn.classList.remove("pixel-dissolve-out");
    yesBtn.style.opacity = "0";
    noBtn.style.opacity = "0";
    yesBtn.style.filter = "brightness(0) contrast(8) blur(6px)";
    noBtn.style.filter = "brightness(0) contrast(8) blur(6px)";
    yesBtn.style.transform = "scale(0.94)";
    noBtn.style.transform = "scale(0.94)";

    // Trigger dissolve in after tiny delay
    setTimeout(() => {
      yesBtn.classList.add("pixel-dissolve-in");
      noBtn.classList.add("pixel-dissolve-in");

      // After dissolve-in finishes, go to animation
      setTimeout(() => {
        startAnimation();
      }, 3200); // ~2.8s animation + small buffer
    }, 150);
  }, 2200); // trigger swap after ~80% of dissolve-out
});