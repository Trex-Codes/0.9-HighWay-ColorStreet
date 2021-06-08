
// BUTTON SUN WITH .ONCLICK; CHANGE STYLES CSS
document.getElementById('Change_Object_Sky').onclick = function() {

	// const PaletteSun = document.getElementById('cuadroSun');
	// Call of file Hidden_Palettes.js
	PaletteSky.style.display = 'initial';
	PaletteSky.style.visibility = 'visible';

	// Icons ::after
	IconTop[4].style.display = 'initial';
	IconTop[4].style.visibility = 'visible';
}

// ===============
//  FIGURA DESIGN
// ===============

// Sky 

function SkyDraw(color) {

	// canvasHTML
	document.getElementById('CanvasHTml').style.backgroundColor = color;
}

document.getElementById('SkyColor1').onclick = function() {
	SkyDraw('#9FD5D1');
}

document.getElementById('SkyColor2').onclick = function() {
	SkyDraw('#0FFFFF');
}

document.getElementById('SkyColor3').onclick = function() {
	SkyDraw('#ffe4c4');
}

document.getElementById('SkyColor4').onclick = function() {
	SkyDraw('#002FA7');
}

document.getElementById('SkyColor5').onclick = function() {
	SkyDraw('#5f9ea0');
}

document.getElementById('SkyColor6').onclick = function() {
	SkyDraw('#A51C30');
}

document.getElementById('SkyColor7').onclick = function() {
	SkyDraw('#db7093');
}

document.getElementById('SkyColor8').onclick = function() {
	SkyDraw('#808000');
}

document.getElementById('SkyColor9').onclick = function() {
	SkyDraw('#f5fffa');
}

document.getElementById('SkyColor10').onclick = function() {
	SkyDraw('#cd853f');
}

document.getElementById('SkyColor11').onclick = function() {
	SkyDraw('#4169e1');
}

document.getElementById('SkyColor12').onclick = function() {
	SkyDraw('#00ff7f');
}

document.getElementById('SkyColor13').onclick = function() {
	SkyDraw('#FFDAB9');
}

document.getElementById('SkyColor14').onclick = function() {
	SkyDraw('#bc8f8f');
}

document.getElementById('SkyColor15').onclick = function() {
	SkyDraw('#90ee90');
}

document.getElementById('SkyColor16').onclick = function() {
	SkyDraw('#EF7F1A');
}

document.getElementById('SkyColor17').onclick = function() {
	SkyDraw('#B57EDC');
}

document.getElementById('SkyColor18').onclick = function() {
	SkyDraw('#1C4C96');
}