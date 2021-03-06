

function playSound (e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;//stops the funciton running
  audio.currentTime =0;//rewinds it so if you hit it again it repeats
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  console.log(e);
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);