const audioTags = document.querySelectorAll('audio');
const sounds = Array.from(audioTags).map(tag => tag.id);
const buttons = document.getElementById('buttons');

sounds.forEach(sound => {

    let soundButton = document.createElement('button');
    soundButton.innerHTML = sound;
    soundButton.classList.add('btn');

    soundButton.addEventListener('click', () => {
        
        stopSounds();
        document.getElementById(sound).play();
    
    });

    buttons.appendChild(soundButton);
})

function stopSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}