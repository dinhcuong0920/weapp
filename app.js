var currentFacingMode = 'environment';
$(document).ready(function () {
  DetectRTC.load(function () {
    if (DetectRTC.isWebRTCSupported == false) {
      alert(
        'Please use Chrome, Firefox, iOS 11, Android 5 or higher, Safari 11 or higher',
      );
    } else {
      if (DetectRTC.hasWebcam == false) {
        alert('Please install an external webcam device.');
      } else {
        swithCamera();
        fullScreen();
        cameraStream();
        snapShot();
      }
    }
  });
});

function cameraStream() {
  let constraints = {
    audio: false,
    video: {
      facingMode: currentFacingMode,
    },
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      console.log(stream);
      video.srcObject = stream;
    })
    .catch(function (err) {
      console.log(err)
    });
}

function snapShot(){
  $("#takePhotoButton").on("click",function(){
    let canvas = $("#preview_snapshot")[0];
    let width = video.videoWidth;
    let height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext('2d');
    context.drawImage(video, 0, 0,0.2*width,0.2*height);
    getCanvasBlob(canvas).then(function(blob) {
      console.log(blob);
    });
  })
}

function getCanvasBlob(canvas) {
  return new Promise(function(resolve, reject) {
    canvas.toBlob(function(blob) {
      resolve(blob);
    }, 'image/jpeg');
  });
}

function swithCamera(){
  $("#switchCameraButton").on("click",function(){
    if(currentFacingMode == 'environment'){
      currentFacingMode = 'user'
    }else{
      currentFacingMode = 'environment'
    }
  })
}

function fullScreen(){
  $("#toggleFullScreenButton").on('click',function(){
    let element = $('#full_screen')[0];
    if(screenfull.isEnabled){
      screenfull.toggle(element);
    }
  })
}