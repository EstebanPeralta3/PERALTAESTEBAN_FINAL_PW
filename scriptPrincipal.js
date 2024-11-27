// Mostrar mensaje de bienvenida
alert("Bienvenido a la Página Principal!");

// Solicitar el nombre del usuario y dar una bienvenida personalizada
let userName = prompt("Por favor, ingresa tu nombre:") || "Usuario";
alert(`¡Hola, ${userName}! Esperamos que disfrutes de la experiencia.`);

// Mostrar el nombre en la página principal
document.getElementById('greeting').innerText = `Hola, ${userName}! Bienvenido a nuestra aplicación.`;

// Función para navegar entre páginas
function navigateTo(page) {
    window.location.href = page;
}
// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}