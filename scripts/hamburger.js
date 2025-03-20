const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
        hamburger.innerHTML = 'X';
    } else {
        hamburger.innerHTML = '&#9776;'; 
    }
});