
function moveTo2024(){
        
    console.log("Loading Chapter 4");


    var svgObject =  window.parent.document.getElementById('historicalmap');
    console.log("svgObject " + svgObject)







    var svgElementAppear0 = svgObject.contentDocument.querySelector('#World2024');
    svgElementAppear0.style.opacity = 1.0;
    console.log("svgElementAppear0 " + svgElementAppear0)


    var svgElementDisappear0 = svgObject.contentDocument.querySelector('#World900BCE');
    svgElementDisappear0.style.opacity = 0.0;
    console.log("svgElementDisappear0 " + svgElementDisappear0)


    var svgElementDisappear1 = svgObject.contentDocument.querySelector('#yearLayer');
    console.log("svgElementDisappear1 " + svgElementDisappear1)
    svgElementDisappear1.style.opacity = 0.0;
    
    var svgElementDisappear2 = svgObject.contentDocument.querySelector('#textYear2024');
    console.log("svgElementDisappear1 " + svgElementDisappear2)
    svgElementDisappear2.style.opacity = 0.0;


    

}

window.addEventListener('keypress', function(event) {
    var keyName = event.key;

    if (keyName == 'å') {
        console.log("inside Å")
        moveTo2024();
        return;
    }

});


document.addEventListener('readystatechange', event => { 
 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        moveTo2024();
    }
});

