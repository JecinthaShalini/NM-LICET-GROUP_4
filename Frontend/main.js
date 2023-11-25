document.addEventListener("DOMContentLoaded", function () {
    // Slide the images automatically
    setInterval(slideImages, 2500); // Change the interval as needed (in milliseconds)
  
    function slideImages() {
      const slider = document.querySelector('.slider');
  
      // Create a clone of the first image
      const firstImageClone = slider.firstElementChild.cloneNode(true);
  
      // Add the clone to the end of the slider
      slider.appendChild(firstImageClone);
  
      // Add the 'slide' class to create the sliding effect
      slider.classList.add('slide');
  
      // Set a delay before removing the first image
      setTimeout(function () {
        // Remove the first image
        slider.removeChild(slider.firstElementChild);
        // Remove the 'slide' class to reset the transform
        slider.classList.remove('slide');
      }, 1000); // Adjust the time to match the transition duration
    }
  
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
      myFunction();
    };
  
    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }
  });
  