function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  if (!audio) return;

  audio.currentTime = 0;
  //Własnosc CurrentTime ustawia lub zwraca aktualną pozycję odtwarzania audio/wideo (w sekundach).
  //Gdy ta właściwość jest ustawiona (a w tym przypadku tak jest), odtwarzacz przeskoczy do określonej pozycji, czyli 0.

  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'box-shadow') return; // omiń, jeśli wartością jest 'box-shadow' - możesz wybrac inną własciwośc
  this.classList.remove('playing');
  console.log(e);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
