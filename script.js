const textToSpeak = document.getElementById('textToSpeak');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const synth = window.speechSynthesis;
let utterance;
let isPaused = false;

playButton.addEventListener('click', () => {
    if (synth.speaking && isPaused) {
        // Resume speech synthesis if paused
        synth.resume();
        isPaused = false;
    } else {
        // Start new speech synthesis
        utterance = new SpeechSynthesisUtterance(textToSpeak.value);
        synth.speak(utterance);
    }
});

pauseButton.addEventListener('click', () => {
    if (synth.speaking) {
        // Pause speech synthesis
        synth.pause();
        isPaused = true;
    }
});