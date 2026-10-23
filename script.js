const playAudio = (selector, soundName) => {
  const audio = document.getElementById(selector);
  const display = document.getElementById("display");

  if (audio) {
    audio.currentTime = 0;
    audio.play();
    display.textContent = soundName;

    const pad = audio.parentElement;

    pad.classList.add("active");
    setTimeout(() => {
      pad.classList.remove("active");
    }, 300);
  }
};

const drumPad = document.querySelectorAll(".drum-pad");

drumPad.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector(".clip");
    const name = pad.id;

    playAudio(audio.id, name);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();

  const audio = document.getElementById(key);

  if (audio) {
    const pad = audio.parentElement;
    playAudio(key, pad.id);
  }
});
