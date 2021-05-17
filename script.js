const title = document.querySelector("#title");

const COLOR_BASE = "white";
const COLOR_CHANGE = "black";

function handleclick() {
    if (title.style.color === COLOR_BASE) {
        title.style.color = COLOR_CHANGE;
    } else {
        title.style.color = COLOR_BASE;
    }
}

function init() {
    title.style.color = COLOR_BASE;
    title.addEventListener("click", handleclick);
}

init();