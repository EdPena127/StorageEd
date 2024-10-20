const formulario = document.getElementById('formulario');
const fechaInput = document.getElementById('fecha');
const enviarButton = document.getElementById('enviar');
const resultadoDiv = document.getElementById('resultado');

enviarButton.addEventListener('click', (e) => {
    e.preventDefault();
    const fecha = fechaInput.value;
    // Aquí debes agregar la lógica para enviar la fecha a la API y obtener la respuesta
    // Puedes utilizar la API de Azure que creaste anteriormente
    // Por ejemplo:
    fetch('https://tu-api-azure.azurewebsites.net/api/vacunas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fecha: fecha })
    })
    .then((response) => response.json())
    .then((data) => {
        resultadoDiv.innerHTML = `La vacuna se ha registrado con éxito. La fecha de la vacuna es: ${data.fecha}`;
    })
    .catch((error) => {
        console.error(error);
    });
});
