// Inicializar EmailJS
emailjs.init("BEaU1boUFZANUY4wV"); // Reemplaza con tu User ID de EmailJS

document.getElementById('sendButton').addEventListener('click', function () {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const score = document.getElementById('score').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar campos
    if (!firstName || !lastName || !score || !message) {
        alert("Por favor, complete todos los campos antes de enviar.");
        return;
    }

    const emailParams = {
        from_name: `${firstName} ${lastName}`,
        score: score,
        message: message,
    };

    emailjs.send("service_acsuqgc", "template_butyp3e", emailParams)
        .then(() => {
            alert(`El formulario fue enviado correctamente por ${firstName} ${lastName}.`);
            document.getElementById('observationForm').reset();
        })
        .catch(error => {
            console.error("Error al enviar el correo:", error);
            alert("Ocurrió un error al enviar el formulario. Intente nuevamente.");
        });
});

// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}