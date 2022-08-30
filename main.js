function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 480);
  canvas.position(650,110);
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function modelLoaded() 
{
    console.log("poseNet is Initialized !!")
}

function draw() 
{
  background('#ffa07a'); 
}

function gotPoses(results)
{
    //if(results.length > 0)
    {
        console.log(results);
    }
}
