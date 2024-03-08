

const map =  window.parent.document.getElementById("historicalmap");
console.log("map: " + map);

function testme(){
    console.log("test: " + map);
}



map.addEventListener("focus", (event) => {
      console.log("CLICKED!! < " );
     this.blur();
});

map.addEventListener("click", (event) => {
      console.log("CLICKED!! >" );
     this.blur();
});




// Select all object elements
const objects = window.parent.document.querySelectorAll("object");

// Iterate over each object element
objects.forEach(object => {


     object.addEventListener('click', function(event) {
        event.preventDefault();
     });
     
     // Attach the load event listener to each object
     object.addEventListener("load", (evt) => {
        const doc = evt.target.contentDocument;
        
        console.log("querySelector" + doc);
    
        // Attach the keydown event listener to each document
        doc.addEventListener("keydown", (evt) => {
            console.log("pressed in svg document", evt.key);
            var keyName = evt.key; // Corrected: Use evt.key instead of event.key
            console.log("pressed inside SVG");
            
            if (keyName == 'ö') {
              handleSvgLoad(); // Assuming handleSvgLoad is a defined function
              return;
            }
       });
   
    doc.addEventListener("focus", (event) => {
          console.log("CLICKED!! < " );
         this.blur();
        });
        
 });
});


window.addEventListener('keypress', function(event) {
    var keyName = event.key;

    if (keyName == 'ö') {
        console.log("inside Ö")
        handleSvgLoad()
        return;
    }
    
    if (keyName == 't') {
         showTurkey()
    }
});

window.addEventListener('load', function() {

    console.log("inside load! " )
    
    var svgObject =  window.parent.document.getElementById('linguamap');
    
        console.log("inside load! " + svgObject )


        console.log("inside layersaddEventListener ")

        var svgElement = svgObject.contentDocument.querySelector('svg');
        var layers = svgElement.querySelectorAll('g[inkscape\\:groupmode="layer"]');

        for (var i = 0; i < layers.length; i++) {
            console.log(layers[i].getAttribute('inkscape:label'));
        } 
});




function startup(){
    return;
}

function isvisible(obj) {
  return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}

function showTurkey(){
  var svgObject =  window.parent.document.getElementById('historicalmap');

  var svgElement = svgObject.contentDocument.querySelector('#turkiye');
  svgElement.textContent = "TURKIET";
  svgObject.blur();

}

function handleSvgLoad() {
    //var svgObject = document.getElementById('linguamap');
    //console.log("svgObject " + svgObject);
    
    // Select all object elements on the page
    var objects =  window.parent.document.getElementsByTagName('object');
             console.log("objects: " + objects.length); 


    for (var i =  0; i < objects.length; i++) {
         var svgObject = objects[i];
         if (svgObject.getAttribute('what') === 'map') {

             var svgElement = svgObject.contentDocument.querySelector('#cities');
             console.log("loaded: " + svgElement); // Logs the selected element to the console
             //svgElement.style.display = 'none';
        
        
              if (svgElement.style.opacity == 0) {
                    console.log("is zero, setting to one " + svgElement); // Logs the selected element to the console
                    svgElement.style.opacity = 1.0;
                } else {
                    svgElement.style.opacity = 0.0;
                    console.log("setting to zero " + svgElement);          
              }
         }
    }
}
