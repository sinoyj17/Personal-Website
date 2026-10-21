
"use strict";

// Display a temporary notification.
const toast = document.getElementById("toast");
let toastTimeout;

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Rotate the introduction text.
const changingWord = document.getElementById("changing-word");

const words = [
  "Future IT Professional.",
  "Technology Enthusiast.",
  "Lifelong Learner.",
  "Problem Solver."
];

let wordIndex = 0;

if (changingWord) {
  setInterval(() => {
    wordIndex = (wordIndex + 1) % words.length;
    changingWord.textContent = words[wordIndex];
  }, 2500);
}

// Motivational quotes button.
const surpriseBtn = document.getElementById("surprise-btn");

const motivationalQuotes = [
  "🎮 Game on! Every challenge is a chance to improve.",
  "💻 Every IT expert started by learning the basics!",
  "🎧 Good music, good mood, better motivation!",
  "🏆 Keep practicing. Small progress leads to big results.",
  "💜 Believe in yourself and keep chasing your dreams!"
];

let motivationalIndex = 0;

if (surpriseBtn) {
  surpriseBtn.addEventListener("click", () => {
    showToast(motivationalQuotes[motivationalIndex]);

    motivationalIndex =
      (motivationalIndex + 1) % motivationalQuotes.length;
  });
}

// Let visitors explore each interest.
const interestCards = document.querySelectorAll(".interest-card");
const interestDetail = document.getElementById("interest-detail");

interestCards.forEach((card) => {
  card.addEventListener("click", () => {
    interestCards.forEach((item) => {
      item.classList.remove("active");
    });

    card.classList.add("active");

    const title = card.querySelector("strong");
    const detail = card.dataset.detail;

    if (interestDetail && title && detail) {
      interestDetail.textContent = `${title.textContent}: ${detail}`;
    }
  });
});

// Friendly closing message.
const messageBtn = document.getElementById("message-btn");
const finalMessage = document.getElementById("final-message");

if (messageBtn) {
  messageBtn.addEventListener("click", () => {
    if (finalMessage) {
      finalMessage.textContent =
        "Thanks for spending time in my world! Keep chasing your dreams. 💜";
    }

    showToast(
      "You've reached the end. Thanks for visiting Jerome's world! ✨"
    );
  });
}
