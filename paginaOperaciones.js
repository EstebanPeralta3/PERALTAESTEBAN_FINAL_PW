document.querySelectorAll('.calcButton').forEach(button => {
    button.addEventListener('click', () => {
        const operation = button.getAttribute('data-operation');

        switch (operation) {
            case 'total':
                const price = prompt("Ingrese el precio del producto:");
                const quantity = prompt("Ingrese la cantidad:");
                if (price && quantity) {
                    const total = parseFloat(price) * parseInt(quantity);
                    alert(`El precio total es: ${total.toFixed(2)}`);
                } else {
                    alert("Debe ingresar valores válidos.");
                }
                break;

            case 'percentage':
                const productPrice = prompt("Ingrese el precio del producto:");
                if (productPrice) {
                    const percentage = parseFloat(productPrice) * 0.30;
                    alert(`El 30% del precio es: ${percentage.toFixed(2)}`);
                } else {
                    alert("Debe ingresar un precio válido.");
                }
                break;

            case 'discount':
                const basePrice = prompt("Ingrese el precio del producto:");
                const quantityDiscount = prompt("Ingrese la cantidad:");
                if (basePrice && quantityDiscount) {
                    const totalPrice = parseFloat(basePrice) * parseInt(quantityDiscount);
                    const discount = totalPrice * 0.25;
                    const discountedPrice = totalPrice - discount;
                    alert(`El precio total con descuento es: ${discountedPrice.toFixed(2)}`);
                } else {
                    alert("Debe ingresar valores válidos.");
                }
                break;

            default:
                alert("Operación no reconocida.");
        }
    });
});
// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}