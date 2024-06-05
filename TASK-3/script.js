// Array of image URLs
const images = [
    'url("https://res.cloudinary.com/dyhlvra5e/image/upload/v1716654661/banner-5-img-1_zd7gqx.png")', 
    'url("https://res.cloudinary.com/dyhlvra5e/image/upload/v1716654661/banner-5-img-3_wccqqr.png")',
    'url("https://res.cloudinary.com/dyhlvra5e/image/upload/v1716654661/banner-5-img-2_xinwyi.png")'
];

// Variable to track the current index of the images array
let currentIndex = 0;

// Function to change the background image of the body
function changeBackgroundImage() {
    // Set the background image of the body using the current index
    document.body.style.backgroundImage = images[currentIndex];
    // Update the currentIndex for the next image
    currentIndex = (currentIndex + 1) % images.length;
}

// Call the changeBackgroundImage function every 3 seconds using setInterval
setInterval(changeBackgroundImage, 3000); // Change image every 3 seconds
