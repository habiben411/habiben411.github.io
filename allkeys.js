// Create an audio element
var audio_drums = new Audio("audio/drumroll.mp3");
var audio_appl = new Audio("audio/applause.mp3");
var audio_glass = new Audio("audio/wineglass.mp3");

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
    if (event.key === 'm' ) {
        // Redirect to another URL
        window.location.href = '/menu.html';
    }
    if (event.key === 'w'  || event.key == 'W') {
      audio_glass.play();
    }
});



window.onload = function() {
    
  cur = './images/mycursor.ico'
  pointer = "url('" + cur + "'), auto"
  document.body.style.cursor = pointer;
  console.log("change cursor? " + pointer);
  cur_svg = '.' + cur
  pointer_svg = "url('" + cur_svg + "'), auto"
/*
  var svgObjects = document.querySelectorAll('object[type="image/svg+xml"]');

  svgObjects.forEach(function(svgObject) {
    var svgDoc = svgObject.contentDocument || svgObject.contentWindow.document;
    console.log("changing cursor for  object " + svgObject);
    svgObject.style.cursor = pointer_svg;

    // Find all SVG elements within the SVG document
    var svgElements = svgDoc.querySelectorAll('svg');
    console.log("elements: " + svgElements);

    svgElements.forEach(function(element) {
      console.log("changing cursor for SVG " + element);
      console.log("changing cursor for SVG to " + pointer_svg);

      element.addEventListener('mousemove', function() {
        this.style.cursor = pointer_svg; // Change cursor to 'pointer' or any other style
      });
    });
  });
*/
  document.querySelectorAll('a').forEach(link => {
    console.log("changeing link " + link + " to " + pointer);
    link.style.cursor = pointer;
  });

};