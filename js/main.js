var body = document.querySelector('body'),
    lightSwitch = body.querySelector('button'),
    text = body.querySelector('.status'),
    audio = new Audio('./switch-3.mp3');

lightSwitch.addEventListener('click', function(event) {

  lightSwitch.classList.toggle('on');
  lightSwitch.classList.toggle('off');
  audio.play();

  if (lightSwitch.classList.contains('off')) {
    body.style.backgroundColor = "#222";
    body.style.color = "#FFF";
    text.innerText = "Hey, who turned off the lights?"
  } else {
    body.style.background = "#FFF";
    body.style.color = "#222";
    text.innerText = "It's so bright in here!";
  }
});
