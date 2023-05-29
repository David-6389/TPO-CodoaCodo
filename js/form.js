const formulario = document.querySelector('#form');

formulario.addEventListener('submit', handleSubmit)

async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(formulario);
    const response = await fetch(formulario.action, {
        method: formulario.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok) {
        formulario.reset();
        Swal.fire({
            title: 'Gracias por Reservar!',
            icon: 'success',
            timer: 1500
        })
    }
}