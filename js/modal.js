
const btnAbrirModal = document.querySelector('#btn-abrir-modal');

const btnCerrarModal = document.querySelector('#btn-cerrar-modal');

const modal = document.querySelector('#modal');



btnAbrirModal.addEventListener('click', ()=>{
    // alert('Anduvo!!');
    modal.showModal();
})

btnCerrarModal.addEventListener('click', ()=>{
    // alert('Anduvo!!');
    modal.close();
})