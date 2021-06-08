
// BUTTON SUN WITH .ONCLICK; CHANGE STYLES CSS
document.getElementById('Change_Object_HigWa').onclick = function() {

	// const PaletteSun = document.getElementById('cuadroSun');
	// Call of file Hidden_Palettes.js
	PaletteHighWay.style.display = 'initial';
	PaletteHighWay.style.visibility = 'visible';

	// Icons ::after
	IconTop[2].style.display = 'initial';
	IconTop[2].style.visibility = 'visible';
}

// ===============
//  FIGURA DESIGN
// ===============

// Highway default
// MIDDLE BASE LINE - Road line (SUP)
ctx.beginPath();
ctx.fillStyle = "grey";
ctx.strokeStyle = "black";
ctx.lineWidth = "3";
ctx.moveTo(0, 400);
ctx.lineTo(1585, 400);
ctx.lineTo(1585, 680);
ctx.lineTo(0, 680);
ctx.lineTo(0, 400);
ctx.stroke();
ctx.fill();
ctx.closePath();

function HighWayDraw(color) {

	// MIDDLE BASE LINE - Road line (SUP)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "black";
	ctx.lineWidth = "3";
	ctx.moveTo(0, 400);
	ctx.lineTo(1585, 400);
	ctx.lineTo(1585, 680);
	ctx.lineTo(0, 680);
	ctx.lineTo(0, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

document.getElementById('HighWayColor1').onclick = function() {
	HighWayDraw('#9FD5D1');
}

document.getElementById('HighWayColor2').onclick = function() {
	HighWayDraw('#0FFFFF');
}

document.getElementById('HighWayColor3').onclick = function() {
	HighWayDraw('#ffe4c4');
}

document.getElementById('HighWayColor4').onclick = function() {
	HighWayDraw('#002FA7');
}

document.getElementById('HighWayColor5').onclick = function() {
	HighWayDraw('#5f9ea0');
}

document.getElementById('HighWayColor6').onclick = function() {
	HighWayDraw('#A51C30');
}

document.getElementById('HighWayColor7').onclick = function() {
	HighWayDraw('#db7093');
}

document.getElementById('HighWayColor8').onclick = function() {
	HighWayDraw('#808000');
}

document.getElementById('HighWayColor9').onclick = function() {
	HighWayDraw('#f5fffa');
}

document.getElementById('HighWayColor10').onclick = function() {
	HighWayDraw('#cd853f');
}

document.getElementById('HighWayColor11').onclick = function() {
	HighWayDraw('#4169e1');
}

document.getElementById('HighWayColor12').onclick = function() {
	HighWayDraw('#00ff7f');
}

document.getElementById('HighWayColor13').onclick = function() {
	HighWayDraw('#FFDAB9');
}

document.getElementById('HighWayColor14').onclick = function() {
	HighWayDraw('#bc8f8f');
}

document.getElementById('HighWayColor15').onclick = function() {
	HighWayDraw('#90ee90');
}

document.getElementById('HighWayColor16').onclick = function() {
	HighWayDraw('#EF7F1A');
}

document.getElementById('HighWayColor17').onclick = function() {
	HighWayDraw('#B57EDC');
}

document.getElementById('HighWayColor18').onclick = function() {
	HighWayDraw('#1C4C96');
}