// Create an audio element
var audio_drums = new Audio("audio/drumroll.mp3");
var audio_appl = new Audio("audio/applause.mp3");

// Add an event listener for the keydown event
window.addEventListener("keydown", function(event) {
    // Check if the 'A' key was pressed
    if (event.key === "d" || event.key === "D") {
        // Play the sound
        audio_drums.play();
        console.log("Playing drum sounds..."); 
    }
    if (event.key === "a" || event.key === "A") {
        // Play the sound
        audio_appl.play();
        console.log("Playing appl sounds..."); 
    }
    if (event.key === 'm') {
        // Redirect to another URL
        window.location.href = '/menu.html';
    }
});



window.onload = function() {
    
    cur = './images/fatima_hand_cursor_128x128.ico'
    pointer = "url('" + cur + "'), auto"
    document.body.style.cursor = pointer;
    console.log("change cursor? " + pointer);
    cur_svg = '.' + cur
    pointer_svg = "url('" + cur_svg + "'), auto"

    var svgObjects = document.querySelectorAll('object[type="image/svg+xml"]');

    svgObjects.forEach(function(svgObject) {
      var svgDoc = svgObject.contentDocument || svgObject.contentWindow.document;
      console.log("changing cursor for  object " + svgObject);

      // Find all SVG elements within the SVG document
      var svgElements = svgDoc.querySelectorAll('svg');
      console.log("elements: " + svgElements);

      svgElements.forEach(function(element) {
        console.log("changing cursor for SVG " + element);

        element.addEventListener('mousemove', function() {
          this.style.cursor = pointer_svg; // Change cursor to 'pointer' or any other style
        });
      });
    });
  

};