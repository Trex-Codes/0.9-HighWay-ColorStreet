// BTNS CHANGE COLOR OPTIONS 
const PaletteSun = document.getElementById('cuadroSun');
const PaletteMount = document.getElementById('CuadroMountains');
const PaletteHighWay = document.getElementById('cuadroHighWay');
const PaletteHighWayLines = document.getElementById('CuadroHighLines');
const PaletteSky = document.getElementById('CuadroSky');

// btn icon top
const IconTop = document.getElementsByClassName('Icon_Top');

document.getElementById('hide_Btns').onclick = function() {

	// Call btns and 
	// change css to hidden them
	PaletteSun.style.display = 'none';
	PaletteSun.style.visibility = 'hidden';

	PaletteMount.style.display = 'none';
	PaletteMount.style.visibility = 'hidden';

	PaletteHighWay.style.display = 'none';
	PaletteHighWay.style.visibility = 'hidden';

	PaletteHighWayLines.style.display = 'none';
	PaletteHighWayLines.style.visibility = 'hidden';

	PaletteSky.style.display = 'none';
	PaletteSky.style.visibility = 'hidden';
}

// CANVAS 
var canvas = document.getElementById('CanvasHTml');
var ctx = canvas.getContext("2d");


// RESIZE SIZE OF CANVAS TO AVOID PIXELED EFFECT
// BY MEANS OF OBTAINING OR EQUALING MEASURES OF HTML AND CSS

var s = getComputedStyle(canvas);
var w = s.width;
var h = s.height;
canvas.width = w.split('px')[0];
canvas.height = h.split('px')[0];