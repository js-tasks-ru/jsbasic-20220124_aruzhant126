const elements = document.getElementsByClassName('hide-self-button');
for (const element of elements) {
  element.addEventListener ('click',hideSelf )
}

function hideSelf() {
  for  (const element of elements) {
    element.setAttribute("hidden", true);
  }
}

