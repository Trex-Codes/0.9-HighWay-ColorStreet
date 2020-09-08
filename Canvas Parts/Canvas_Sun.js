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
	const callColorSun = document.getElementById('cuadroSun1');
	callColorSun.style.display = 'inherit';
	callColorSun.style.visibility = 'visible';
}