function preload(){
  }

  function setup() {
    canvas = createCanvas(640,480);
    canvas.position(1150, 280);
    video = createCapture(VIDEO);
    video.hide();
    
    tintColor = "";
  }

  function draw() {
    image(video, 0, 0, 640, 480);
    tint(tintColor);
  }


  const canvasDownload = document.getElementById("canvasDownload");

  const pngDataUrl = VIDEO.toDataURL("image/png");
  
  canvasDownload.href = pngDataUrl

  function takeSnapshot(){
  
   save('student_name.png'); 
  }

  function filterTint(){
    tintColor = document.getElementById("colorName").value;
  }