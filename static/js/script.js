const voiceSelect = document.getElementById("voiceSelect");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const errorMsg = document.querySelector(".errorMsg");
const textarea = document.getElementById("textToSpeak");

let language, text, selectedVoice;
// ----------------------------------------------------
// Load all available voices:
window.onload = function () {
  console.log("已加载全部声音列表");
  populateVoiceList();
};
function populateVoiceList() {
  const voices = responsiveVoice.getVoices();
  console.log(voices);
  voices.forEach(function (voice) {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerHTML = voice.name;
    voiceSelect.appendChild(option);
  });
  detectLanguage();
  console.log(voiceSelect.value);
}

function detectLanguage() {
  language = textarea.getAttribute("language");
  if (language === "zh-cn") {
    voiceSelect.value = "Chinese Male";
  } else if (language === "ja") {
    voiceSelect.value = "Japanese Male";
  } else if (language === "en") {
    voiceSelect.value = "UK English Male";
  } else {
    voiceSelect.value = "--Select a voice--";
  }
  selectedVoice = voiceSelect.value;
}

voiceSelect.addEventListener("change", function () {
  selectedVoice = voiceSelect.value;
  playBtn.disabled = false;
  console.log(`当前被选中声音：${selectedVoice}`);
});
// ----------------------------------------------------
playBtn.addEventListener("click", function () {
  const text = textarea.value;
  selectedVoice = voiceSelect.value;

  if (!responsiveVoice.isPlaying()) {
    console.log(`准备播报，声音选择：${selectedVoice}`);
    responsiveVoice.speak(text, selectedVoice, {
      onend: function () {
        pauseBtn.classList.add("hidden");
        playBtn.classList.remove("hidden");
      },
    });
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
  }
});
// ----------------------------------------------------
pauseBtn.addEventListener("click", function () {
  responsiveVoice.pause();
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");
});
