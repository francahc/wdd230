const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        // Toggle the menu visibility and change the hamburger to 'X'
        menu.classList.toggle("open");
        hamburger.classList.toggle("open");

        // Change the hamburger icon to 'X' when menu is open
        if (hamburger.classList.contains("open")) {
            hamburger.innerHTML = 'X'; // Change to X
        } else {
            hamburger.innerHTML = '&#9776;'; // Change back to hamburger
        }
    });
}
