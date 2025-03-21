const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        // Toggle the menu visibility and change the hamburger to 'X'
        menu.classList.toggle("open");
        hamburger.classList.toggle("open");
    });
}
