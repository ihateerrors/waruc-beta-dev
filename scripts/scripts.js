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

  window.addEventListener('DOMContentLoaded', (event) => {
    fetch("header.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        document.querySelector("#header-placeholder").innerHTML = data;
        window.scrollTo(0, 0); // Force scroll to top
      });

    fetch("footer.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        document.querySelector("#footer-placeholder").innerHTML = data;
      });

       // Get the current page's URL
       var url = window.location.href;
  
       // Extract the page name from the URL
       var pageName = url.substring(url.lastIndexOf('/') + 1);
      
       // Remove the .html extension
       pageName = pageName.split('.').shift();
      
       // Get the nav item with the id that corresponds to the page name
       var navItem = document.getElementById(pageName);
      
       // Add the active-nav-item class to this nav item
       if (navItem) {
         navItem.classList.add('active-nav-item');
       }
      
      });
      

  // #### Scrolls down to corresponding accordion when road-sign is clicked ###
  document.addEventListener('DOMContentLoaded', () => {
    const roadSignLinks = document.querySelectorAll('.road-sign a');
    roadSignLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.getAttribute('href');
        const accordionElement = document.querySelector(target);
        if (accordionElement) {
          accordionElement.parentElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  
  