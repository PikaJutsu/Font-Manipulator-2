leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#00ff0a");
    text('Woen Bi',50,400);
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }

    nose_X = 0;
    nose_Y = 0;
    difference = 0;
    
    leftWristX = 0;
    rightWristY = 0;
    
    function setup() {
        video = createCapture(VIDEO);
        video.size(550,600);
        video.position(10,60);
    
    
        canvas =  createCanvas(600,440);
        canvas.position(600,130);
    
    
        poseNet = ml5.poseNet(video, modelLoaded);
    
    
    
    
        poseNet.on('pose', gotPoses);
    }
    function gotPoses(results) {
        if (results.length > 0) 
        {
             console.log(results);
        } 
    
    
         leftWristX = results[0].pose.leftWrist.x;
         rightWristY = results[0].pose.rightWrist.x;
    
         difference = floor(leftWristX - rightWristY);
         console.log(" left wrist = " + leftWristX + " right wrist = " + rightWristY + " difference =  " +  difference);
        
    }
    
    function modelLoaded() {
        console.log('poseNet is intialized');
    }
    
    
    function draw(){
      background('#66b2ff');
      textSize(difference);
      fill('#FFFF00');
      text('Woen Bi',50,400);
    
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}