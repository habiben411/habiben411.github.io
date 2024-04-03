language = "Arabic"
/*
document.querySelector("object").addEventListener("load", (evt) => {
  const doc = evt.target.contentDocument;
  doc.addEventListener( "keydown", (evt) => {
    console.log( "pressed in svg document", evt.key );
    var keyName = event.key;
    if (keyName === 'ö') {
        toggleArabicLatin();
    } 
  });
});
*/

let currentAudio = null; // Global reference to the currently playing audio

function pauseCurrentAudio() {
 if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Rewind to the beginning
 }
}

var audioElements = document.getElementsByTagName('audio');
for (var i = 0; i < audioElements.length; i++) {
    
    var elementID = audioElements[i].id;
    console.log("Element " + elementID)

    var hoverText = document.getElementById('hoverText_' + elementID);
    
    var originalColor = hoverText.style.color;

    // Add a mouseover event listener to the element
    (function(audio, hoverText) {
        hoverText.addEventListener('mouseover', function() {
            // Play the audio when the mouse hovers over the element
             hoverText.style.color = 'red';

            try {
                   pauseCurrentAudio();
                   console.error('Playing ' + elementID)
                   audio.play(); 
                   currentAudio = audio;
                } catch (error) {
                    console.error('Failed to play audio:', error);
                }
        });
    // Reset the color on mouseout
       hoverText.addEventListener('mouseout', function() {
           hoverText.style.color = originalColor; // Reset to original color
       });
       
    })(audioElements[i], hoverText); // Pass 'audio' to the IIFE    
}
// Select all SVG elements
var svgs =  document.getElementsByTagName('object');
var svgsArray = Array.from(svgs);

// Iterate over each SVG element and add the mouseover event listener
svgsArray.forEach(function(svg) {
    svg.addEventListener('mouseover', function() {
        console.log('SVG mouseover');
    });
});

svgsArray.forEach(function(svg) {
  console.log ("adding listener");
  svg.addEventListener( "keydown", (evt) => {
    console.log( "pressed in svg document", evt.key );
    var keyName = event.key;
    if (keyName === 'ö') {
        toggleArabicLatin();
    } 
  });
});


function changeText(element,id, new_text){
 // Access the SVG document
    var svgDoc = document.getElementById(element).contentDocument;

    // Find the text element by its ID
    var textElement = svgDoc.getElementById(id);

    // Check if the text element exists
    if (textElement) {

        // Change the text content
        textElement.textContent = new_text;
    }
}

function showArabic(){
    language = "Arabic"
    var objects = document.getElementsByTagName('object');
    var ids = [];
    
    //console.log("inside shwArabic " + objects.length);


    for (var i =  0; i < objects.length; i++) {
         if (objects[i].getAttribute('what') === 'syntax') {
            ids.push(objects[i].id);
         }
    }
    
    for (var i =  0; i < ids.length; i++) {
        element = ids[i]
        changeOpacity(element,"text_latin",0.0);
        changeOpacity(element,"text_arabic",1.0); 
    }
}


function showLatin(){
    language = "Latin"
    var objects = document.getElementsByTagName('object');
    var ids = [];

    for (var i =  0; i < objects.length; i++) {
         if (objects[i].getAttribute('what') === 'syntax') {
            ids.push(objects[i].id);
         }
    }
    
    for (var i =  0; i < ids.length; i++) {
        element = ids[i]

        changeOpacity(element,"text_latin",1.0);
        changeOpacity(element,"text_arabic",0.0); 
    }
}


function toggleArabicLatin(){
    if (language == "Arabic")
        showLatin();
    else
        showArabic();
}

function changeVisibility(element, id, opacity){
 // Access the SVG document
    var svgDoc = document.getElementById(element).contentDocument;

    // Find the text element by its ID
    var el = svgDoc.getElementById(id);

    // Check if the text element exists
    if (el) {
        if (opacity < 1.0){
            el.style.display = "none";
            //console.log("Setting el to zero")
        }
        else{
            el.style.display = "block";
        }       
    }
}

function changeOpacity(element, id, opacity){
 // Access the SVG document
    var svgDoc = document.getElementById(element).contentDocument;

    // Find the text element by its ID
    var el = svgDoc.getElementById(id);

    // Check if the text element exists
    if (el) {
        // Change the text content
        el.style.opacity = opacity;
    }
}
 
window.addEventListener('keypress', function(event) {
    var keyName = event.key;

    if (keyName === 'ö') {
        console.log("inside Ö")
        toggleArabicLatin();
    }
});


function startup(element,
                 prefix_la,
                 r1_la,v1_la,
                 r2_la,v2_la,
                 r3_la,v3_la,
                 suffix_la,
                 prefix_ar,
                 r1_ar,v1_ar,
                 r2_ar,v2_ar,
                 r3_ar,v3_ar,
                 suffix_ar,
                 explain_ar,
                 explain_sv,
                 opacity_vocals,
                 opacity_radicals
                 ){
    //console.log("r1_la " + r1_la);
    changeText(element,"text_latin_prefix", prefix_la);
    changeText(element,"text_latin_suffix", suffix_la);
    changeText(element,"text_latin_v3", v3_la);
    changeText(element,"text_latin_v2", v2_la);
    changeText(element,"text_latin_v1", v1_la);
    changeText(element,"text_latin_r3", r3_la);
    changeText(element,"text_latin_r2", r2_la);
    changeText(element,"text_latin_r1", r1_la);
    changeText(element,"text_ar_suffix", suffix_ar);
    changeText(element,"text_ar_prefix", prefix_ar);
    changeText(element,"text_ar_r3", r3_ar);
    changeText(element,"text_ar_r2", r2_ar);
    changeText(element,"text_ar_r1", r1_ar);
    changeText(element,"text_ar_v3", v3_ar);
    changeText(element,"text_ar_v2", v2_ar);
    changeText(element,"text_ar_v1", v1_ar);
    changeText(element,"explain_ar", explain_ar);
    changeText(element,"explain_sv", explain_sv);

    changeVisibility(element,"V1",opacity_vocals);
    changeVisibility(element,"V2",opacity_vocals);
    changeVisibility(element,"V3",opacity_vocals);
    changeVisibility(element,"SuffixLayer",opacity_vocals);
    changeVisibility(element,"PrefixLayer",opacity_vocals);

    changeOpacity(element,"radicals",opacity_radicals);

}

function isvisible(obj) {
  return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}

