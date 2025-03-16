document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mensajeEnviado').innerHTML = '<p>Gracias por tu sugerencia. ¡Tu voz cuenta!</p>';
    this.reset();
});
