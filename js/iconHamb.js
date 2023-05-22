
document.querySelector(".hamb-icon").addEventListener("click", animateHmab);

var line_1 = document.querySelector(".linea1-hamb-icon");
var line_2 = document.querySelector(".linea2-hamb-icon");
var line_3 = document.querySelector(".linea3-hamb-icon");

function animateHmab() {
    line_1.classList.toggle("activelinea1-hamb-icon");
    line_2.classList.toggle("activelinea2-hamb-icon");
    line_3.classList.toggle("activelinea3-hamb-icon");
}

