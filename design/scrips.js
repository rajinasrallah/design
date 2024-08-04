const slides = document.getElementsByClassName('slide'); // Get all elements with the class 'slide'
let slideIndex = 0; // Initial slide index
let intervalId = null; // Variable to store the interval ID

// Add event listener to initialize the slider once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', initializeSlider);

// Function to initialize the slider
function initializeSlider() {
    if (slides.length > 0) { // Check if there are any slides
        slides[slideIndex].classList.add('DisplaySlide'); // Display the initial slide
        intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
}

// Function to show a specific slide based on the index
function showSlide(index) {
    // Handle wrap-around cases
    if (index >= slides.length) {
        slideIndex = 0; // Go back to the first slide if index exceeds the number of slides
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Go to the last slide if index is negative
    } else {
        slideIndex = index; // Set the slideIndex to the current index
    }

    // Remove 'DisplaySlide' class from all slides to hide them
    Array.from(slides).forEach(slide => {
        slide.classList.remove('DisplaySlide');
    });

    // Add 'DisplaySlide' class to the current slide to display it
    slides[slideIndex].classList.add('DisplaySlide');
}

// Function to show the previous slide
function prevSlide() {
    slideIndex--; // Decrement the slide index
    showSlide(slideIndex); // Show the slide at the new index
}

// Function to show the next slide
function nextSlide() {
    slideIndex++; // Increment the slide index
    showSlide(slideIndex); // Show the slide at the new index
}
function openMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle("change");
    let sidebar = document.getElementsByClassName('sidebar')[0];
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}