//Load script as browser parses the html, but wait till its finished before running this file
document.addEventListener("DOMContentLoaded", function() {

	let sideOfSquare = 8
	  , drawSpaceSize = sideOfSquare * sideOfSquare;

	const DRAW_DIV = document.getElementById('draw');
 	
	//function create_draw_space() {

	for (let i = 1; i <= drawSpaceSize; i += 1) {

		let newDiv = document.createElement('div');

		newDiv.classList.add('pseudoPixel');

		newDiv.addEventListener(`mouseenter`, change_color);

		DRAW_DIV.appendChild(newDiv);
	}

	document.getElementById('draw').style.gridTemplateColumns = `repeat(${sideOfSquare}, 1fr)`;
	document.getElementById('draw').style.gridTemplateRows = `repeat(${sideOfSquare}, 1fr)`;

	//}

	

	function change_color(e) {
		e.target.classList.remove(`pseudoPixel`);
		e.target.classList.add(`pseudoPixelChange`);
	}
});