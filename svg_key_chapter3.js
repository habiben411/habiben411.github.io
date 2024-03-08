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
    
    console.log("node, length " + divs.length);

    
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id.startsWith("composed")){
        
            divs[i].addEventListener('click', function() {
                 this.textContent = ""
            });
        }
    }
    
}