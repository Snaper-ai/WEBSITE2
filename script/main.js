let div1 = document.getElementsByClassName("div1");
for (let i = 0; i < div1.length; i++){
	div1[i].addEventListener("click", changeColor);
}
function changeColor() {
	for (let i = 0; i < div1.length; i++){
	div1[i].style.backgroundColor = "white";
}
	this.style.backgroundColor = this.dataset.color;
}
