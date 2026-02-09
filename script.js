"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catVideo = document.querySelector(".cat-img");
const videoSource = catVideo.querySelector("source");

const MAX_VIDEOS = 5;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", () => {
  noCount++;
  const videoIndex = Math.min(noCount, MAX_VIDEOS);
  changeVideo(videoIndex);
  resizeYesButton();
  updateNoButtonText();
});

function handleYesClick() {
  buttonsContainer.classList.add("hidden");
  changeVideo("yes");

  titleElement.innerHTML = `
    <button class="love-btn">Yayyy!! :3 ❤️</button>
  `;

  document.querySelector(".love-btn").addEventListener("click", () => {
    window.location.href = "love.html";
  });
}

function changeVideo(video) {
  catVideo.pause();
  videoSource.src = `cat-${video}.mp4`;
  catVideo.load();
  catVideo.play();
}

function resizeYesButton() {
  const fontSize = parseFloat(getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${fontSize * 1.4}px`;
}

function generateMessage(count) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
  ];
  return messages[Math.min(count, messages.length - 1)];
}

function updateNoButtonText() {
  noButton.textContent = generateMessage(noCount);
}
