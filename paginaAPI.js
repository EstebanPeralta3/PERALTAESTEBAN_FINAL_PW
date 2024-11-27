// Inicializar EmailJS
emailjs.init("BEaU1boUFZANUY4wV");

// API 1: Enviar un correo
document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailTo = document.getElementById('emailTo').value;
    const emailMessage = document.getElementById('emailMessage').value;
    const emailStatus = document.getElementById('emailStatus');

    emailjs.send("service_acsuqgc", "template_butyp3e", {
        to_email: emailTo,
        message: emailMessage,
    })
        .then(() => {
            emailStatus.textContent = "Correo enviado con éxito.";
            emailStatus.style.color = "green";
            document.getElementById('emailForm').reset();
        })
        .catch(error => {
            console.error("Error al enviar el correo:", error);
            emailStatus.textContent = "Error al enviar el correo.";
            emailStatus.style.color = "red";
        });
});

// API 2: Ver imágenes
document.getElementById('searchImages').addEventListener('click', function () {
    const query = document.getElementById('imageSearch').value;
    const imageResults = document.getElementById('imageResults');
    imageResults.innerHTML = ""; // Limpiar resultados previos

    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=FghxDYYnUcEozhIdgv7DNkZc6xZT4YNedPg7DWlJXEU`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(image => {
                const img = document.createElement('img');
                img.src = image.urls.small;
                img.alt = image.alt_description || "Imagen";
                imageResults.appendChild(img);
            });
        })
        .catch(error => console.error("Error al obtener imágenes:", error));
});

// API 3: Conversión de moneda
document.getElementById('convertCurrency').addEventListener('click', function () {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const conversionResult = document.getElementById('conversionResult');

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const result = (amount * rate).toFixed(2);
            conversionResult.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        })
        .catch(error => console.error("Error en conversión:", error));
});

// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}
