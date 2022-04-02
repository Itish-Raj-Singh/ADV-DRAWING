noseX =0;
noseY =0;
diffrence =0;
leftWristX =0;
rightWristX =0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 ,500);

    canvas = createCanvas(550,500);
    canvas.position(560 ,160);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function draw(){
    background('#00FF00');
    document.getElementById('square_side').innerHTML = "Width Height Of The Square ="+diffrence+'px';
    fill("#14AA75");
    stroke('#7ECC49');
    square(noseX , noseY , diffrence);
}
function gotPoses(results){
    if(results.length >0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX ="+noseX+"noseY ="+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);

        console.log("leftWristX ="+leftWristX+"rightWristX ="+rightWristX+"diffrence"+diffrence);
    }
}