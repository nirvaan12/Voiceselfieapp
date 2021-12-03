var SpeechRecognition= window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function load(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    
}
recognition.onresult=function(event){
console.log(event);
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
console.log(content);

if(content=="take my selfie"){
    speech1();
}

}


function speech1(){
synth= window.speechSynthesis;
speakdata = "Taking your selfie in 5 seconds";
var utterThis= new SpeechSynthesisUtterance(speakdata);
synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function(){
    takesnapshot();
    save();
},5000);
}

camera= document.getElementById("camera");
Webcam.set({
width:360,
height:250,
image_format:"jpeg",
jpeg_quality:90
});
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='selfieimg' src='"+data_uri+"'>";
    });

}


function save(){
    link=document.getElementById("link");
    image= document.getElementById("selfieimg");
    link.href=image;
    link.click();
}