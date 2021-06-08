
// BUTTON SUN WITH .ONCLICK; CHANGE STYLES CSS
document.getElementById('Change_Object_LinesHigWa').onclick = function() {

	// const PaletteSun = document.getElementById('cuadroSun');
	// Call of file Hidden_Palettes.js
	PaletteHighWayLines.style.display = 'initial';
	PaletteHighWayLines.style.visibility = 'visible';

	// Icons ::after
	IconTop[3].style.display = 'initial';
	IconTop[3].style.visibility = 'visible';
}

// ===============
//  FIGURA DESIGN
// ===============

// Highway Lines default
// ROAD FRAMES

// (1)
ctx.beginPath();
ctx.fillStyle = "#ffffffff";
ctx.strokeStyle = "#000";
ctx.moveTo(15, 515);
ctx.lineTo(292, 515);
ctx.lineTo(292, 565);
ctx.lineTo(15, 565);
ctx.lineTo(15, 515);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (2)
ctx.beginPath();
ctx.fillStyle = "#ffffffff";
ctx.strokeStyle = "#000";
ctx.moveTo(342, 515);
ctx.lineTo(609, 515);
ctx.lineTo(609, 565);
ctx.lineTo(342, 565);
ctx.lineTo(342, 515);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (3)
ctx.beginPath();
ctx.fillStyle = "#ffffffff";
ctx.strokeStyle = "#000";
ctx.moveTo(659, 515);
ctx.lineTo(926, 515);
ctx.lineTo(926, 565);
ctx.lineTo(659, 565);
ctx.lineTo(659, 515);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (4)
ctx.beginPath();
ctx.fillStyle = "#ffffffff";
ctx.strokeStyle = "#000";
ctx.moveTo(976, 515);
ctx.lineTo(1243, 515);
ctx.lineTo(1243, 565);
ctx.lineTo(976, 565);
ctx.lineTo(976, 515);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (5)
ctx.beginPath();
ctx.fillStyle = "#ffffffff";
ctx.strokeStyle = "#000";
ctx.moveTo(1293, 515);
ctx.lineTo(1560, 515);
ctx.lineTo(1560, 565);
ctx.lineTo(1293, 565);
ctx.lineTo(1293, 515);
ctx.stroke();
ctx.fill();
ctx.closePath();

function HighWayDrawLines(color) {

	// ROAD FRAMES
	// (1)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.moveTo(15, 515);
	ctx.lineTo(292, 515);
	ctx.lineTo(292, 565);
	ctx.lineTo(15, 565);
	ctx.lineTo(15, 515);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (2)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.moveTo(342, 515);
	ctx.lineTo(609, 515);
	ctx.lineTo(609, 565);
	ctx.lineTo(342, 565);
	ctx.lineTo(342, 515);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (3)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.moveTo(659, 515);
	ctx.lineTo(926, 515);
	ctx.lineTo(926, 565);
	ctx.lineTo(659, 565);
	ctx.lineTo(659, 515);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (4)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.moveTo(976, 515);
	ctx.lineTo(1243, 515);
	ctx.lineTo(1243, 565);
	ctx.lineTo(976, 565);
	ctx.lineTo(976, 515);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (5)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.moveTo(1293, 515);
	ctx.lineTo(1560, 515);
	ctx.lineTo(1560, 565);
	ctx.lineTo(1293, 565);
	ctx.lineTo(1293, 515);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

document.getElementById('HighWayLinesColor1').onclick = function() {
	HighWayDrawLines('#9FD5D1');
}

document.getElementById('HighWayLinesColor2').onclick = function() {
	HighWayDrawLines('#0FFFFF');
}

document.getElementById('HighWayLinesColor3').onclick = function() {
	HighWayDrawLines('#ffe4c4');
}

document.getElementById('HighWayLinesColor4').onclick = function() {
	HighWayDrawLines('#002FA7');
}

document.getElementById('HighWayLinesColor5').onclick = function() {
	HighWayDrawLines('#5f9ea0');
}

document.getElementById('HighWayLinesColor6').onclick = function() {
	HighWayDrawLines('#A51C30');
}

document.getElementById('HighWayLinesColor7').onclick = function() {
	HighWayDrawLines('#db7093');
}

document.getElementById('HighWayLinesColor8').onclick = function() {
	HighWayDrawLines('#808000');
}

document.getElementById('HighWayLinesColor9').onclick = function() {
	HighWayDrawLines('#f5fffa');
}

document.getElementById('HighWayLinesColor10').onclick = function() {
	HighWayDrawLines('#cd853f');
}

document.getElementById('HighWayLinesColor11').onclick = function() {
	HighWayDrawLines('#4169e1');
}

document.getElementById('HighWayLinesColor12').onclick = function() {
	HighWayDrawLines('#00ff7f');
}

document.getElementById('HighWayLinesColor13').onclick = function() {
	HighWayDrawLines('#FFDAB9');
}

document.getElementById('HighWayLinesColor14').onclick = function() {
	HighWayDrawLines('#bc8f8f');
}

document.getElementById('HighWayLinesColor15').onclick = function() {
	HighWayDrawLines('#90ee90');
}

document.getElementById('HighWayLinesColor16').onclick = function() {
	HighWayDrawLines('#EF7F1A');
}

document.getElementById('HighWayLinesColor17').onclick = function() {
	HighWayDrawLines('#B57EDC');
}

document.getElementById('HighWayLinesColor18').onclick = function() {
	HighWayDrawLines('#1C4C96');
}
