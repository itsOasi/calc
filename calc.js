class Screen{
	allowed_chars = ["1234567890+-*/()"];
	screen = null
	constructor(el){
		this.screen = el;
	}
	write = function(char){
		console.log(char)
		if (String(char) in String(this.allowed_chars)){
			this.screen.innerText = char
		}
	}

}


document.body.onload = () => {
	const screen = new Screen(document.getElementById("screen"));
	buttons = document.getElementsByClassName("num")
	for (let b in buttons){
		buttons[b].onclick = () => {
			screen.write(buttons[b].value);
		}
	}
}
document.getElementById("submit").onclick = () => {
	console.log(eval(screen.innerText));
}

