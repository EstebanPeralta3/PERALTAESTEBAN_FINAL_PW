// Inicializa emailjs
emailjs.init("BEaU1boUFZANUY4wV");

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Credenciales predeterminadas
    const defaultUsername = "USER";
    const defaultPassword = "PASS";

    // Valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación de las credenciales
    if (username === defaultUsername && password === defaultPassword) {
        // Mostrar alerta de inicio exitoso
        alert("Inicio de sesión exitoso. Bienvenido, " + username + "!");

        // Enviar correo con emailjs
        emailjs.send("service_acsuqgc", "template_nvixzkc", {
            username: username,
            message: `El usuario ${username} ha iniciado sesión exitosamente.`
        })
            .then(() => {
                console.log("Correo enviado con éxito.");
                // Redirigir a página principal
                window.location.href = "paginaPrincipal.html";
            })
            .catch(error => {
                console.error("Error al enviar el correo:", error);
            });
    } else {
        // Mostrar alerta de error
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
});
