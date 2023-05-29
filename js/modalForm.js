let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".btn-navBar")[0];
let abrirServicios = document.querySelectorAll(".btn-reserva")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");
}); 

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");

    setTimeout(function(){
        modalContainer.style.opacity = "0";
        modalContainer.style.visibility = "hidden";
    },800)
});

window.addEventListener("click", function(e){
    // console.log(e.taget)
    if(e.target == modalContainer){
        modal.classList.toggle("modal-close");
    
        setTimeout(function(){
            modalContainer.style.opacity = "0";
            modalContainer.style.visibility = "hidden";
        },800)
    }
})