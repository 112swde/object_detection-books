img = "";
status = "";

function setup()
{
    canvas = createCanvas(420,350);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting object";
}

function preload()
{
    img = loadImage("books.jpg");
}

function draw()
{
    image(img,0,0,420,350);
    fill("#FF0000");
    text("books",45,35);
    noFill();
    stroke("#FF0000");
    rect(10,60,500,110);
}


function modelLoaded()
{
    console.log("model Loaded!");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
    if(error){
       console.log(error);
    }
    console.log(results);
}