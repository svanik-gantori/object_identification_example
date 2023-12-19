img="";
status="";
function preload()
{
    img=loadImage('dog_cat.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw()
{
    image(img,0,0,640,420);
    fill("orange");
    text("Dog",40,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);
   
    fill("blue");
    text("Cat",305,85);
    noFill();    
    stroke("blue");
    rect(300,70,300,325);
    
}

function modelLoaded()
{
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResults)
}

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }

    console.log(results);   
}