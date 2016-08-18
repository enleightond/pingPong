var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;

window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPerSecond = 30;
	
	setInterval(function(){
		moveEverything();
		drawEverything();
	}, 1000/framesPerSecond);
};

function moveEverything() {
	ballX = ballX + ballSpeedX;
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	};

	if (ballX > canvas.width){
		ballSpeedX = -ballSpeedX;
	};
};

function drawEverything() {
	//creates the black playing field
	colorRect(0,0,canvas.width,canvas.height,'black');
	//creates the left paddle
	colorRect(5,200,10,100,'white');
	//creates the ball
	colorRect(ballX,200,50,25,'red');
};

function colorRect(leftX, topY, width, height, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);

}