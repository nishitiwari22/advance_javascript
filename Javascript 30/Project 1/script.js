function removeTransition(e) {
    if (e.properName !== 'transform') return;
    e.target.classList.remove('playing');
}
function playSound(e) {
    const audio = document.querySelector (`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector (`div[data-key="${e.keyCode}"]`);
    if (!code) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
const keys = Array.from (document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
window.addEventListener('keydown', playSound);