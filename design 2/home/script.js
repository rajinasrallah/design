let header = document.getElementsByClassName("header")[0];
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        
        header.style.backgroundColor = 'rgba(242, 202, 107, 0.9)'; // Change background color on scroll
        header.style.height = '60px'
        header.style.padding = '10px 20px'; // Change padding on scroll
    } else {
        header.style.backgroundColor = 'rgba(242, 201, 107, 0)'; // Default background color
        header.style.padding = '40px 20px';
    }
}); 
document.addEventListener('DOMContentLoaded', initializeSlider);

// Function to initialize the slider
function initializeSlider() {
    if (slides.length > 0) { // Check if there are any slides
        slides[slideIndex].classList.add('DisplaySlide'); // Display the initial slide
        intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
}

// Function to show a specific slide based on the index
let slides = document.querySelectorAll('.slide');
let slideIndex = 0;

// Function to show the slide at the given index
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
    slides.forEach(slide => {
        slide.classList.remove('DisplaySlide');
    });

    // Add 'DisplaySlide' class to the current slide to display it
    slides[slideIndex].classList.add('DisplaySlide');
    indicate();
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
let indicators = document.getElementsByClassName('circle')
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');

one.addEventListener('click', function() {
    showSlide(0);
});
two.addEventListener('click', function() {
    showSlide(1);
});
three.addEventListener('click', function() {
    showSlide(2);
});
four.addEventListener('click', function() {
    showSlide(3);
});

// Function to indicate the active slide
function indicate() {
switch (slideIndex) {
    case 0:
        one.style.backgroundColor = 'black';
        two.style.backgroundColor = 'white';
        three.style.backgroundColor = 'white';
        four.style.backgroundColor = 'white';
        break;
    case 1:
        two.style.backgroundColor = 'black';
        one.style.backgroundColor = 'white';
        three.style.backgroundColor = 'white';
        four.style.backgroundColor = 'white';
        break;
    case 2:
        three.style.backgroundColor = 'black';
        two.style.backgroundColor = 'white';
        one.style.backgroundColor = 'white';
        four.style.backgroundColor = 'white';
        break;
    case 3:
        four.style.backgroundColor = 'black';
        one.style.backgroundColor = 'white';
        two.style.backgroundColor = 'white';
        three.style.backgroundColor = 'white';
        break;
}
}

    
    







//menu
function openMenu() {
    const menu = document.getElementById('menu');;
    menu.classList.toggle("change");
    let sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.style.display = "block";
    let overlay = document.getElementById('overlay');
    overlay.style.display = "block";
}
function closeMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle("change");
    let sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.style.display = "none";
        let overlay = document.getElementById('overlay');
        overlay.style.display = "none";

}
//vedio
function videoPopupClick() {
    let overlay = document.getElementById('overlay');
    let popup = document.getElementById('popup');
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function closePopup() {
    let overlay = document.getElementById('overlay');
    let popup = document.getElementById('popup');
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

// Optional: Close the popup when the overlay is clicked
overlay.addEventListener('click', closePopup);