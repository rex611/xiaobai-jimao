const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const animation = document.getElementById("animation");
const runnerXiaobai = document.getElementById("runnerXiaobai");
const runnerJimao = document.getElementById("runnerJimao");
const hugGif = document.getElementById("hugGif");
const successMsg = document.getElementById("successMsg");

// Function to start the animation (used by both Yes and tricked No)
function startAnimation() {
  document.querySelector(".buttons").classList.add("hidden");
  animation.classList.remove("hidden");

  runnerXiaobai.style.display = "block";
  runnerJimao.style.display = "block";

  // Switch to hug after 3.5 seconds (adjust timing as you like)
  setTimeout(() => {
    runnerXiaobai.style.display = "none";
    runnerJimao.style.display = "none";
    hugGif.classList.remove("hidden");
    successMsg.classList.remove("hidden");
  }, 3500);
}

// Clicking YES → directly start animation
yesBtn.addEventListener("click", () => {
  startAnimation();
});

// Clicking NO → swap texts with fade, then start animation
noBtn.addEventListener("click", () => {
  // Add fade class to both buttons
  yesBtn.classList.add("fade");
  noBtn.classList.add("fade");

  // After fade-out starts, change texts (but they are still invisible)
  setTimeout(() => {
    // Swap texts
    yesBtn.textContent = "No 😢";
    noBtn.textContent = "Yes 💕";

    // Change colors too (optional but cute)
    yesBtn.style.background = "#ff6b6b"; // now red
    noBtn.style.background = "#51cf66";  // now green

    // Fade back in with new texts
    yesBtn.style.opacity = "0";
    noBtn.style.opacity = "0";
    yesBtn.classList.remove("fade");
    noBtn.classList.remove("fade");

    // Small delay then fade in
    setTimeout(() => {
      yesBtn.style.opacity = "1";
      noBtn.style.opacity = "1";
    }, 100);

    // After swap is visible for a short moment, proceed to animation
    setTimeout(() => {
      startAnimation();
    }, 1800); // give ~1.8s to see the swapped buttons before animation starts

  }, 1200); // match fade-out duration
});