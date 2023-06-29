const toggleButton = document.querySelector("#nav-toggle");
const navLinks = document.getElementById('nav-links');


toggleButton.addEventListener('click',() => {
    navLinks.classList.toggle('active');
})