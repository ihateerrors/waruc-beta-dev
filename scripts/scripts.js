function resizeHeaderImage() {
    var header = document.querySelector("header");
    var headerImage = document.querySelector("#header-image");
  
    var aspectRatio = 1920 / 600;
    var newHeight = window.innerWidth / aspectRatio;
  
    if (newHeight > 700) {
      newHeight = 700;
    }
  
    header.style.paddingTop = newHeight / window.innerWidth * 100 + "%";
  }
  
  window.addEventListener("resize", resizeHeaderImage);
  resizeHeaderImage();
