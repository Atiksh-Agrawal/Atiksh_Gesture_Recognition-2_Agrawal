prediction1 = "";
prediction2 = "";

Webcam.set({
  height : 300,
  width  :350,
  image_fromat :'png',
  png_quality : 90
});
var camera = document.getElementById("camera");
Webcam.attach('#camera');

function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = 
        "<img id = 'captured_image' src = " + data_uri + ">";
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DtKIV595h/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function Speak(){
 var synthesis = window.speechSynthesis;
 speak_data1 = "The First prediction is" + prediction1;
 speak_data2 = "And The First prediction is" + prediction2; 
 utter_this = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
 synthesis.speak(utter_this);   
}