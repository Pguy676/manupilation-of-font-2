leftWristX = "0"
rightWristX = "0"


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftWristX = results[0].pose.leftWristX
        rightWristX = results[0].pose.rightWristX
        difference = floor(leftWristX - rightWristX);
    }
    
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function draw(){
    background('#969A97');
    
    textsize(difference);
    fill('#C5DA14');
    text('Phanthom' ,50 ,400)
}