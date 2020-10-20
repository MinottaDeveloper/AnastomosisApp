
let isRecording = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    capture.size(windowHeight, windowHeight);
  }
  
  function draw() {
    background(220);
    image(capture, 0, 0, windowHeight, windowHeight);
  }

  function toggleRecording() {
    if (!isRecording) {
      startRecording({
        // we're passing in 'onProgress' as a parameter to get status feedback on-screen - this is completely optional and you'd also get this info on the console!
        onProgress: (progress) => document.querySelector('#status').textContent = `progress: ${(100 * progress).toFixed(1)}% 🔄`
      });
  
      isRecording = true;
      document.querySelector('#status').textContent = 'is recording 🔴';
      document.querySelector('#button').textContent = 'stop recording ⏹️';
    } else {
      // simply stop the recording - p5.rec will do the rest:
      stopRecording();
  
      document.querySelector('#status').textContent = 'starting up... 🎥';
      document.querySelector('#button').disabled = true;
    }
  }