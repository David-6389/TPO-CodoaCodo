// Cuando se haga scroll hacia abajo el navBar desaparezca, scroll hacia arriba aprezca

let ubicacionPrincipal = window.scrollY;

window.onscroll = function() {
    let desplazamientoActual = window.scrollY;
    if(ubicacionPrincipal >= desplazamientoActual) {
        document.getElementById('navBar').style.top = '0';
    } else {
        document.getElementById('navBar').style.top = '-100px';
    }
    ubicacionPrincipal = desplazamientoActual; 
}