const inputPrecioPorcentaje = document.querySelector(".precioPorcentaje");
const inputDescuentoPorcentaje = document.querySelector(".descuentoPorcentaje");
const btnPorcentaje = document.querySelector(".btn-calcularDescuento");
const precioFinal = document.querySelector(".precioFinal");
const mensajePorcentaje = document.querySelector(".mensajeDescuentoPorcentaje");
const resetPorcentaje = document.querySelector("#reset-btn");
/* ****************CUPON***************** */
const inputPrecioCupon = document.querySelector(".precioBase");
const inputDescuentoCupon = document.querySelector("#cupon");
const btnCalcularCupon = document.querySelector(
    ".btn-calcular-descuento-cupon"
);
const precioFinalCupon = document.querySelector(".precioFinalConCupon");
const mensajeCupon = document.querySelector(".mensajeDescuentoCupon");
const resetCupon = document.querySelector("#reset-btn-cupon");
/* ***************Reset****************** */
resetPorcentaje.addEventListener("click", function () {
    resetResultadoPorcentaje();
});

resetCupon.addEventListener("click", function () {
    resetResultadoCupon();
});
/* ******************************************** */
function resetResultadoPorcentaje() {
    document.querySelector(".precioPorcentaje").value = "";
    document.querySelector(".descuentoPorcentaje").value = "";

    document.querySelector(".precioFinal").innerHTML = "";
    document.querySelector(".mensajeDescuentoPorcentaje").innerHTML = "";
}

inputPrecioPorcentaje.addEventListener("input", () => {
    const precio = Number(inputPrecioPorcentaje.value);
    if (precio <= 0) {
        mensajePorcentaje.innerHTML = `El valor es negativo: ${precio}, no esta permitido`;
    }
});
inputDescuentoPorcentaje.addEventListener("input", () => {
    const descuento = Number(inputDescuentoPorcentaje.value);
    if (descuento <= 0) {
        mensajePorcentaje.innerHTML = `El valor del descuento debe ser mayor de cero`;
    }
});
/* --------------------------------------------- */
function calcularPrecioFinal(precio, descuento) {
    return (precio * (100 - descuento)) / 100;
}
/* --------------------------------------------- */
btnPorcentaje.addEventListener("click", () => {
    const precio = Number(inputPrecioPorcentaje.value);
    const descuento = Number(inputDescuentoPorcentaje.value);
    precioFinal.innerHTML = `Precio final = $${calcularPrecioFinal(
        precio,
        descuento
    )}`;
});
/* **************************************** */

// Obtén una referencia al elemento select
var selectElement = document.getElementById("cupon");

// Oculta la opción sin valor al abrir el select
selectElement.addEventListener("mousedown", function () {
    // Obtén la opción sin valor
    var emptyOption = selectElement.querySelector('option[value=""]');

    // Deshabilita la opción sin valor
    emptyOption.disabled = true;
});
/* ***************Reset cupon************* */
function resetResultadoCupon() {
    document.querySelector(".precioBase").value = "";
    document.querySelector("#cupon").value = "";

    document.querySelector(".precioFinalConCupon").innerHTML = "";
    document.querySelector(".mensajeDescuentoCupon").innerHTML = "";
}

//***Valorar la informacion */
inputPrecioCupon.addEventListener("input", () => {
    const precio = Number(inputPrecioCupon.value);
    if (precio <= 0) {
        mensajeCupon.innerHTML = `El valor es negativo: {${precio}}, no esta permitido`;
    }
});

inputDescuentoCupon.addEventListener("input", function () {
    const cupon = inputDescuentoCupon.value;
});

btnCalcularCupon.addEventListener("click", () => {
    const precio = Number(inputPrecioCupon.value);

    const cupon = inputDescuentoCupon.value;
    let desCupon = 0;

    switch (cupon) {
        case "bueno":
            desCupon = 20;
            break;
        case "muy-bueno":
            desCupon = 15;
            break;
        case "re-bueno":
            desCupon = 25;
            break;

        default:
            break;
    }

    const descuento = desCupon;
    precioFinalCupon.innerHTML = `Precio final = $${calcularPrecioFinal(
        precio,
        descuento
    )}`;
});
