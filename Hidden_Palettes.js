// BTNS CHANGE COLOR OPTIONS 
const PaletteSun = document.getElementById('cuadroSun');
const PaletteMount = document.getElementById('CuadroMountains');
const PaletteHighWay = document.getElementById('cuadroHighWay');
const PaletteHighWayLines = document.getElementById('CuadroHighLines');
const PaletteSky = document.getElementById('CuadroSky');

// btn icon top
const IconTop = document.getElementsByClassName('Icon_Top');

document.getElementById('hide_Btns').onclick = function() {

	// Call btns and change css to hidden them
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