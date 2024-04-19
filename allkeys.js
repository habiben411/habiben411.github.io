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

