window.onload = function() {
    var cells  =  document.getElementsByTagName('td');
    
    
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
    
            this.style.color = 'red';
            
            
            const cellContent = event.target.textContent;

    
            var table = this.parentNode.parentNode.parentNode;
    
            // Step 3: Get the ID of the parent table
            var tableId = table.id;

            if (tableId === "sifrTable") {
                // Select the output div
                 outputDiv = document.getElementById('composedTextSifr');
                 outputDiv.innerHTML += cellContent;
                 console.log("SifrTable");
            }
            if (tableId === "swahilTable") {
                // Select the output div
                 outputDiv = document.getElementById('composedTextSwahil');
                 outputDiv.innerHTML += cellContent;
            }         
            
            
        });
    }
    
    var divs  =  document.getElementsByTagName('div');
    

    
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id.startsWith("composed")){
        
            divs[i].addEventListener('click', function() {
                 this.textContent = ""
            });
        }
    }
    
}

document.addEventListener('keypress', function(event) {
                var svgObject = document.getElementById("diac");
                var svgDoc = svgObject.contentDocument; // Access the SVG document
                var layer = svgDoc.getElementById("diac");
                var layerExplanation = svgDoc.getElementById("Explanation");

                // Check if the key pressed is 'c' (for example)
                if (event.key === 'ö') {
                   
                      if (layer.style.opacity == 0) {
                            layer.style.opacity = 1.0;
                        } else {
                            layer.style.opacity = 0.0;
                            layerExplanation.style.opacity = 0.0;

                      }
                  
                }
                
                if (event.key === 't') {
                  
                      if (layerExplanation.style.opacity == 0) {
                            layerExplanation.style.opacity = 1.0;
                        } else {
                            layerExplanation.style.opacity = 0.0;
                      }
                  
                }
                
            });