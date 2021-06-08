
// BUTTON SUN WITH .ONCLICK; CHANGE STYLES CSS
document.getElementById('Change_Object_Sun').onclick = function() {

	// const PaletteMount = document.getElementById('CuadroMountains');
	// Call of file Hidden_Palettes.js
	PaletteSun.style.display = 'initial';
	PaletteSun.style.visibility = 'visible';

	// Icons ::after
	IconTop[0].style.display = 'initial';
	IconTop[0].style.visibility = 'visible';
}

// ===============
//  FIGURA DESIGN
// ===============

// Sun default
ctx.beginPath();
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "#000";
ctx.arc(1300, 95, 70, 0, Math.PI/180*360);
ctx.stroke();
ctx.fill();
ctx.closePath();

function SunDraw(color) {
	// Sun default
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = "#000";
	ctx.arc(1300, 95, 70, 0, Math.PI/180*360);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}

document.getElementById('suncolor1').onclick = function() {
	SunDraw('#9FD5D1');
}

document.getElementById('suncolor2').onclick = function() {
	SunDraw('#0FFFFF');
}

document.getElementById('suncolor3').onclick = function() {
	SunDraw('#ffe4c4');
}

document.getElementById('suncolor4').onclick = function() {
	SunDraw('#002FA7');
}

document.getElementById('suncolor5').onclick = function() {
	SunDraw('#5f9ea0');
}

document.getElementById('suncolor6').onclick = function() {
	SunDraw('#A51C30');
}

document.getElementById('suncolor7').onclick = function() {
	SunDraw('#db7093');
}

document.getElementById('suncolor8').onclick = function() {
	SunDraw('#808000');
}

document.getElementById('suncolor9').onclick = function() {
	SunDraw('#f5fffa');
}

document.getElementById('suncolor10').onclick = function() {
	SunDraw('#cd853f');
}

document.getElementById('suncolor11').onclick = function() {
	SunDraw('#4169e1');
}

document.getElementById('suncolor12').onclick = function() {
	SunDraw('#00ff7f');
}

document.getElementById('suncolor13').onclick = function() {
	SunDraw('#FFDAB9');
}

document.getElementById('suncolor14').onclick = function() {
	SunDraw('#bc8f8f');
}

document.getElementById('suncolor15').onclick = function() {
	SunDraw('#90ee90');
}

document.getElementById('suncolor16').onclick = function() {
	SunDraw('#EF7F1A');
}

document.getElementById('suncolor17').onclick = function() {
	SunDraw('#B57EDC');
}

document.getElementById('suncolor18').onclick = function() {
	SunDraw('#1C4C96');
}