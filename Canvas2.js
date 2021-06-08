var canvas = document.getElementById('CanvasHTml');
var ctx = canvas.getContext("2d");


// RESIZE SIZE OF CANVAS TO AVOID PIXELED EFFECT
// BY MEANS OF OBTAINING OR EQUALING MEASURES OF HTML AND CSS

var s = getComputedStyle(canvas);
var w = s.width;
var h = s.height;
canvas.width = w.split('px')[0];
canvas.height = h.split('px')[0];

// BUTTON SUN WITH .ONCLICK; CHANGE STYLES CSS
document.getElementById('Change_Object_Sun').onclick = function() {

	// const PaletteSun = document.getElementById('cuadroSun');
	// Call of file Hidden_Palettes.js
	PaletteSun.style.display = 'initial';
	PaletteSun.style.visibility = 'visible';

}


// ===============
//  FIGURA DESIGN
// ===============

// Sun default
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.arc(1300, 95, 70, 0, Math.PI/180*360);
ctx.stroke();
ctx.fill();
ctx.closePath();