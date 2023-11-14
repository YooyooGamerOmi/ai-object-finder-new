img = "";
status1 = "";
objects_name = [];

    


function preload(){
}

function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
 video = createCapture(VIDEO);
 video.size(400,400)
 video.hide();
}


function start(){
    objectDetector  = ml5.objectDetector('cocossd',modelLoaded)
  document.getElementById("status").innerHTML = objects_name + 'found';
  if(objects[i].hint == objects_name)

     }

function draw(){
    image(video ,0,0,400,400)
   
    if( status1 != "")
    {
      r = random(255);
      g = random(255);
      b = random(255);


        objectDetector.detect(video,gotResult);
        for ( i=0; i< objects.length; i++)
        {
            objectDetector.detect(video,gotResult);
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = " Number of objects are :" + objects.length;
            
            fill(r,g,b)
            percent = floor(objects[i].confidence *100);
            text(objects[i].label + " " + percent + "%",objects[i].x + 15, objects[i].y +15);
            noFill()
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }  
    }
}

function modelLoaded(){
    console.log("Model Loaded")
    status1 = true;
    objectDetector.detect(video, gotResult)
}

function gotResult(error,results){
    if(error)  {
        console.log(error);

    }
    else{
        console.log(results)
        objects = results;

    }

}


