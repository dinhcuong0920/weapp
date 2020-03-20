$(document).ready(function () {
    DetectRTC.load(function() {
        if (DetectRTC.isWebRTCSupported == false) {
          alert(
            'Please use Chrome, Firefox, iOS 11, Android 5 or higher, Safari 11 or higher',
          );
        } else {
          if (DetectRTC.hasWebcam == false) {
            alert('Please install an external webcam device.');
          } else {
            
          }
        }
      });
});