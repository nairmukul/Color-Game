var number=6;
var colors =generateRandomColors(number);
var pickedColor= pickColors();
var squares= document.querySelectorAll(".square")
var colorDisplay= document.querySelector("#colorDisplay")
var message= document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent= pickedColor;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	number=3
	colors=generateRandomColors(number);
	pickedColor=pickColors();
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<squares.length ; i++){
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.display="none";
	}


})

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	number=6;
	colors=generateRandomColors(number);
	pickedColor=pickColors();
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<squares.length ; i++){
		
			squares[i].style.backgroundColor=colors[i];
		
			squares[i].style.display="block";
	}

})




for( var i=0;i<squares.length; i++)
{
	//add colors to the squares
	squares[i].style.backgroundColor= colors[i];

	//check the color clicked
	squares[i].addEventListener("click",function(){
	var clickedColor= this.style.backgroundColor;
	// check if colors match or not

	if(pickedColor==clickedColor){
		message.textContent= "Correct";
		changeColors(clickedColor);
		h1.style.background=clickedColor;
		resetButton.textContent= "Play Again";
	}
	else{
		this.style.background= "#232323";
		message.textContent= "Try Again";
	}

	});

}
function changeColors(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickColors(){
	var random= Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
 	var arr=[];

 	//Random color generation

 	for(var i=0;i<num;i++)
 	{
 	arr.push(randomColor());	
 	}

 	return arr;
}
function randomColor(){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
resetButton.addEventListener("click", function(){
	message.textContent="";
	resetButton.textContent="New Colors";
	//to generate new random colors
	colors=generateRandomColors(number);
	//to initialize the value to be compared
	pickedColor=pickColors();
	//to change the color of text displayed
	colorDisplay.textContent=pickedColor;
	//change colors in display
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.background = "steelblue";
})