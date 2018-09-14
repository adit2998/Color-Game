
var numSquares = 6;
var colors = generateRandomColors(numSquares);


var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display= "none";
		}
	}
});


hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++)
	{
			squares[i].style.background = colors[i];
		
			squares[i].style.display= "block";
	}
});

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background=colors[i];
	}

	h1.style.background="#232323";

});


colorDisplay.textContent= pickedColor;

for(var i=0; i<squares.length; i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor==pickedColor)
		{
			messageDisplay.textContent ="Correct!";
			resetButton.textContent="Play Again ?";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		}

		else
		{
			this.style.background= "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color)
{
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr=[];

	for(var i =0; i<num; i++)
	{
		arr.push(RandomColor());
	}

	return arr;
}

function RandomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

