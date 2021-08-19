//Load script as browser parses the html, but wait till its finished before running this file
document.addEventListener(`DOMContentLoaded`, function() {

	const DRAW_SPACE_DIV = document.getElementById(`draw`);
	const RESET_BUTTON = document.getElementById(`reset`);
	const DEFAULT_COLOR = `#ffffff`;


	let sideOfSquare = 16
	  , drawSpaceSize = sideOfSquare * sideOfSquare
	  , fillColor = DEFAULT_COLOR;

	let mouseDown = false;

  
	//function make_draw_space() {
	for (let i = 1; i <= drawSpaceSize; i += 1) {

		let pixel = document.createElement(`div`);

		pixel.classList.add(`pseudoPixel`);
		pixel.style.backgroundColor = fillColor;

		pixel.addEventListener(`mouseenter`, draw_color);
		pixel.addEventListener(`mousedown`, is_mouse_down);
		pixel.addEventListener(`mouseup`, is_mouse_up);


		DRAW_SPACE_DIV.appendChild(pixel);
	}

	document.getElementById(`draw`).style.gridTemplateColumns = `repeat(${sideOfSquare}, 1fr)`;
	document.getElementById(`draw`).style.gridTemplateRows = `repeat(${sideOfSquare}, 1fr)`;
	//}


	function is_mouse_down() {
		mouseDown = true;
	}
	function is_mouse_up() {
		mouseDown = false;
	}

	function draw_color(e) {
		console.log(mouseDown);
		if (mouseDown) {
			e.target.style.backgroundColor = `#000000`;
		} else {
			//Do nothing!
		}
	}

	RESET_BUTTON.addEventListener(`click`, reset_background_color);

	function reset_background_color() {
		
		let pseudoPixels = document.querySelectorAll(`.pseudoPixel`);

		pseudoPixels.forEach(function(pspElement) {
			pspElement.style.backgroundColor = fillColor;
		});
	}



});