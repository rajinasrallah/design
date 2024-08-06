let header = document.getElementsByClassName("header")[0];
//sticky header
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
//sidebar
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