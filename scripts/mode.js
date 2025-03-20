const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const main = document.querySelector("main");

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    main.classList.add('dark-mode');
    modeButton.textContent = '💡'; 
} else {
    modeButton.textContent = '🕶️'; 
}

modeButton.addEventListener("click", () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        modeButton.textContent = '🕶️';
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        modeButton.textContent = '💡';
        localStorage.setItem('dark-mode', 'disabled');
    }
});
