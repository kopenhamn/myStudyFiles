function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    if(!sound) {return}
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition));

window.addEventListener('keydown', playSound)
