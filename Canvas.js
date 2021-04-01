function ColorCuadro() {
	const callColorSun = document.getElementById('cuadroColor');
	callColorSun.style.display = 'inherit';
	callColorSun.style.visibility = 'visible';
}		
	// Context declared
	var canvas = document.getElementById('CanvasHtml');
	var ctx  = canvas.getContext("2d");

	// BTN hidde other btns
document.getElementById('hide_Btns').onclick = function() {
	const btnSun = document.getElementById('cuadroSun1');
	const btnMount = document.getElementById('cuadroMountains');
	const btnHigh = document.getElementById('cuadroHighWay');
	const btnHigLine = document.getElementById('cuadroHighWayLines');
	const btnSky = document.getElementById('cuadroSky');

	// Sun
	btnSun.style.display = 'none';
	btnSun.style.visibility = 'hidden';

	// Mountains
	btnMount.style.display = 'none';
	btnMount.style.visibility = 'hidden';

	//Highway 
	btnHigh.style.display = 'none';
	btnHigh.style.visibility = 'hidden';

	// Highway Lines
	btnHigLine.style.display = 'none';
	btnHigLine.style.visibility = 'hidden';

	// sky 
	btnSky.style.display = 'none';
	btnSky.style.display = 'hidden';
}