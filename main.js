var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    recognition.start();
}
recognition.onresult = function(event){
    var content = event.results[0][0].transcript;
    if(content == "selfie"){
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width: 350, height:350, image_format:'png', png_quality:90 
});

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function(){
        image_id = "selfie1";
        take_snapshot();
        speak_data = "taking your selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);
    setTimeout(function(){
        image_id = "selfie2";
        take_snapshot();
        speak_data = "taking your selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function(){
        image_id = "selfie3";
        take_snapshot();
    }, 15000);
}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = ' <img id="selfie" src="'+data_uri+'">';
    });
}


