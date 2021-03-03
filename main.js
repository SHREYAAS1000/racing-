canvas =  document.getElementById("myCanvas");
ctx =canvas.getContext("2d");
console.log(random_number); 
rover_width= 100;
rover_height= 92;

background_image = "racing.gif";

rover_image = "car1.png";
rover_image2 = "car1.png";

rover_x=10;
rover_y=10;

function add() {

    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src = rover_image;
	rover_imgtag.src = rover_image2;
}

function uploadbackground()
{
    ctx.drawImage(background_imgtag,0 ,0 , canvas.width, canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_imgtag, rover_x,rover_y,rover_width,rover_height )

