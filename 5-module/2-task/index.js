const elements = document.getElementsByClassName("toggle-text-button");
const text = document.getElementById("text");

for (const element of elements) {
  element.addEventListener ('click',toggleText )
}
function toggleText() {
  let isTextHidden = text.hidden;
  text.hidden = !isTextHidden;
}
