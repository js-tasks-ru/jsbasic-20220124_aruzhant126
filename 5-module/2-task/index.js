function toggleText() {
	const element = document.querySelector('.toggle-text-button');
	const text = document.getElementById("text");

	element.addEventListener ('click', () => {
		let isTextHidden = text.hidden;
  	    text.hidden = !isTextHidden;
	});
}



