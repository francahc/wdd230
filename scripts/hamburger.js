const hamburger = document.querySelector("#hamburger");

if (hamburger) {  // Check if the element exists
    hamburger.addEventListener("click", () => {
        const nav = document.querySelector("nav");
        if (nav) {
            nav.classList.toggle("open"); // Toggle class to show/hide the menu
        }
    });
} else {
    console.error("Hamburger menu element not found!");
}