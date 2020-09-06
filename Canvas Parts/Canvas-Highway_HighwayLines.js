	// LINEA MEDIO BASE  - Linea carretera (SUP)
		ctx.beginPath();
		ctx.fillStyle = "#C1C1C1FF";
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

	// -----------------------------------------------


	document.getElementById('Change_Object_HigWa').onclick = function() {
	let colorasksun1 = prompt('digite el color de la Hiwhway');

		// LINEA MEDIO BASE  - Linea carretera (SUP)
		ctx.beginPath();
		ctx.fillStyle = colorasksun1;
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
// CUADROS CARRETERA 

	// (1)
	ctx.beginPath();
	ctx.fillStyle = "white";
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
	ctx.fillStyle = "white";
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
	ctx.fillStyle = "white";
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
	ctx.fillStyle = "white";
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
	ctx.fillStyle = "white";
	ctx.moveTo(1293, 515);
	ctx.lineTo(1560, 515);
	ctx.lineTo(1560, 565);
	ctx.lineTo(1293, 565);
	ctx.lineTo(1293, 515);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

// -----------------------------------------------

	document.getElementById('Change_Object_LinesHigWa').onclick = function() {
	let colorasksun2 = prompt('digite el color de las Hiwhway Lines');

// CUADROS CARRETERA 

	// (1)
	ctx.beginPath();
	ctx.fillStyle = colorasksun2;
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
	ctx.fillStyle = colorasksun2;
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
	ctx.fillStyle = colorasksun2;
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
	ctx.fillStyle = colorasksun2;
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
	ctx.fillStyle = colorasksun2;
	ctx.moveTo(1293, 515);
	ctx.lineTo(1560, 515);
	ctx.lineTo(1560, 565);
	ctx.lineTo(1293, 565);
	ctx.lineTo(1293, 515);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
}
