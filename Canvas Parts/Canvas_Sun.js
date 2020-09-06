	// SUN
	ctx.beginPath();
	ctx.fillStyle = "yellow";
	ctx.strokeStyle = "black";
	ctx.arc(1300, 95, 70, 0, Math.PI/180*360);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

// -----------------------------------------------

	document.getElementById('Change_Object_Sun').onclick = function() {
	let colorasksun1 = prompt('Enter the color of the sun');

	// SUN
	ctx.beginPath();
	ctx.fillStyle = colorasksun1;
	ctx.strokeStyle = "black";
	ctx.arc(1300, 95, 70, 0, Math.PI/180*360);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}