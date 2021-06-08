
// BUTTON SUN WITH .ONCLICK; CHANGE STYLES CSS
document.getElementById('Change_Object_Moun').onclick = function() {

	// const PaletteSun = document.getElementById('cuadroSun');
	// Call of file Hidden_Palettes.js
	PaletteMount.style.display = 'initial';
	PaletteMount.style.visibility = 'visible';

	// Icons ::after
	IconTop[1].style.display = 'initial';
	IconTop[1].style.visibility = 'visible';
}

// ===============
//  FIGURA DESIGN
// ===============

// Mountains default

// (1)
ctx.beginPath();
ctx.fillStyle = '#008000';
ctx.strokeStyle = "black";
ctx.moveTo(0, 400);
ctx.quadraticCurveTo(158, -50, 317, 400);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (2)
ctx.beginPath();
ctx.fillStyle = '#008000';
ctx.strokeStyle = "black";
ctx.moveTo(317, 400);
ctx.quadraticCurveTo(474, -50, 634, 400);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (3)
ctx.beginPath();
ctx.fillStyle = '#008000';
ctx.strokeStyle = "black";
ctx.moveTo(634, 400);
ctx.quadraticCurveTo(790, -50, 951, 400);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (4)
ctx.beginPath();
ctx.fillStyle = '#008000';
ctx.strokeStyle = "black";
ctx.moveTo(951, 400);
ctx.quadraticCurveTo(1106, -50, 1268, 400);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (5)
ctx.beginPath();
ctx.fillStyle = '#008000';
ctx.strokeStyle = "black";
ctx.moveTo(1268, 400);
ctx.quadraticCurveTo(1422, -50, 1585, 400);
ctx.stroke();
ctx.fill();
ctx.closePath();

function MountainsDraw(color) {

	// (1)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.moveTo(0, 400);
	ctx.quadraticCurveTo(158, -50, 317, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (2)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.moveTo(317, 400);
	ctx.quadraticCurveTo(474, -50, 634, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (3)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.moveTo(634, 400);
	ctx.quadraticCurveTo(790, -50, 951, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (4)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.moveTo(951, 400);
	ctx.quadraticCurveTo(1106, -50, 1268, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (5)
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.moveTo(1268, 400);
	ctx.quadraticCurveTo(1422, -50, 1585, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

document.getElementById('MontColor1').onclick = function() {
	MountainsDraw('#9FD5D1');
}

document.getElementById('MontColor2').onclick = function() {
	MountainsDraw('#0FFFFF');
}

document.getElementById('MontColor3').onclick = function() {
	MountainsDraw('#ffe4c4');
}

document.getElementById('MontColor4').onclick = function() {
	MountainsDraw('#002FA7');
}

document.getElementById('MontColor5').onclick = function() {
	MountainsDraw('#5f9ea0');
}

document.getElementById('MontColor6').onclick = function() {
	MountainsDraw('#A51C30');
}

document.getElementById('MontColor7').onclick = function() {
	MountainsDraw('#db7093');
}

document.getElementById('MontColor8').onclick = function() {
	MountainsDraw('#808000');
}

document.getElementById('MontColor9').onclick = function() {
	MountainsDraw('#f5fffa');
}

document.getElementById('MontColor10').onclick = function() {
	MountainsDraw('#cd853f');
}

document.getElementById('MontColor11').onclick = function() {
	MountainsDraw('#4169e1');
}

document.getElementById('MontColor12').onclick = function() {
	MountainsDraw('#00ff7f');
}

document.getElementById('MontColor13').onclick = function() {
	MountainsDraw('#FFDAB9');
}

document.getElementById('MontColor14').onclick = function() {
	MountainsDraw('#bc8f8f');
}

document.getElementById('MontColor15').onclick = function() {
	MountainsDraw('#90ee90');
}

document.getElementById('MontColor16').onclick = function() {
	MountainsDraw('#EF7F1A');
}

document.getElementById('MontColor17').onclick = function() {
	MountainsDraw('#B57EDC');
}

document.getElementById('MontColor18').onclick = function() {
	MountainsDraw('#1C4C96');
}