const elem = document.getElementsByClassName('hide-self-button');

elem.addEventListener ('click',hideSelf )

function hideSelf() {
if (!elem.hidden) {
  elem.style.display = 'none';
}
}
