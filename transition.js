//window.onload = cycleImages2;
let currentIndex = 0;
let waitingForTrigger = false;
let images = document.querySelectorAll('#imageGallery .galleryImage');
let cycleCount = 0;


// Listen for keydown event
document.addEventListener('keydown', function(event) {
    // Rerun the animation if the space bar is pressed
    if (event.key === 'å') {
        let images = document.querySelectorAll('#imageGallery .galleryImage');
        cycleCount = 0;
        cycleImages2();
        intervalId = setInterval(cycleImages2, 1000);

    }
    if (event.key === 'ä') {
        displayFirstImage();
    }
});  



 
function cycleImages() {

    let images = document.querySelectorAll('#imageGallery .galleryImage');
    let currentIndex = 0;
    
    function cycleImages() {
        // Add fadeIn class to current image
        images[currentIndex].classList.add('fadeIn');
    
        // After a short delay, remove active class from all images
        setTimeout(() => {
            images.forEach((image, index) => {
                if (index !== currentIndex) {
                    image.classList.remove('active');
                }
            });
        }, 500); // Adjust delay as needed
    
        // Update current index
        currentIndex = (currentIndex + 1) % images.length;
    }
    
    // Call the function every 3 seconds
    let intervalId = setInterval(cycleImages, 3500);
};


// Function to display the first image
function displayFirstImage() {
    // Reset current index to the start
    currentIndex = 0;
    waitingForTrigger = true;

    // Loop through all images
    images.forEach((image, index) => {
        // If the image is not the first one, set its opacity to 0
        if (index !== 0) {
            image.style.opacity = "0";
        } else {
            // Otherwise, set its opacity to 1 and add the active class
            image.style.opacity = "1";
            image.classList.add('active');
        }
    });
    
    // Call cycleImages to start the animation with the first image
}

//let intervalId = setInterval(cycleImages2, 500);

