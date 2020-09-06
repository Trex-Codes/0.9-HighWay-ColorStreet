// (1)
	ctx.beginPath();
	ctx.fillStyle = 'green';
	ctx.strokeStyle = "black";
	ctx.moveTo(0, 400);
	ctx.quadraticCurveTo(158, -50, 317, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (2)
	ctx.beginPath();
	ctx.fillStyle = 'green';
	ctx.strokeStyle = "black";
	ctx.moveTo(317, 400);
	ctx.quadraticCurveTo(474, -50, 634, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (3)
	ctx.beginPath();
	ctx.fillStyle = 'green';
	ctx.strokeStyle = "black";
	ctx.moveTo(634, 400);
	ctx.quadraticCurveTo(790, -50, 951, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (4)
	ctx.beginPath();
	ctx.fillStyle = 'green';
	ctx.strokeStyle = "black";
	ctx.moveTo(951, 400);
	ctx.quadraticCurveTo(1106, -50, 1268, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (5)
	ctx.beginPath();
	ctx.fillStyle = 'green';
	ctx.strokeStyle = "black";
	ctx.moveTo(1268, 400);
	ctx.quadraticCurveTo(1422, -50, 1585, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

// -----------------------------------------------

	// FIGURE MOUNTAINS
	document.getElementById('Change_Object_Moun').onclick = function() {
	let colorasksun1 = prompt('Enter the color of the mountains');
	
	// (1)
	ctx.beginPath();
	ctx.fillStyle = colorasksun1;
	ctx.strokeStyle = "black";
	ctx.moveTo(0, 400);
	ctx.quadraticCurveTo(158, -50, 317, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (2)
	ctx.beginPath();
	ctx.fillStyle = colorasksun1;
	ctx.strokeStyle = "black";
	ctx.moveTo(317, 400);
	ctx.quadraticCurveTo(474, -50, 634, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (3)
	ctx.beginPath();
	ctx.fillStyle = colorasksun1;
	ctx.strokeStyle = "black";
	ctx.moveTo(634, 400);
	ctx.quadraticCurveTo(790, -50, 951, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (4)
	ctx.beginPath();
	ctx.fillStyle = colorasksun1;
	ctx.strokeStyle = "black";
	ctx.moveTo(951, 400);
	ctx.quadraticCurveTo(1106, -50, 1268, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// (5)
	ctx.beginPath();
	ctx.fillStyle = colorasksun1;
	ctx.strokeStyle = "black";
	ctx.moveTo(1268, 400);
	ctx.quadraticCurveTo(1422, -50, 1585, 400);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}