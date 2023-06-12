const inputRectBase = document.querySelector(".rectanguloBase");
const inputRectAltura = document.querySelector(".rectanguloAltura");
const inputRectBotton = document.querySelector(".btn");
const cuadradoBase = document.querySelector(".base");
const cuadradoAltura = document.querySelector(".altura");
const cuadradoPerimetro = document.querySelector(".perimetro");
const cuadradoArea = document.querySelector(".area");
const mensaje = document.querySelector(".mensaje");
const resetBtn = document.querySelector("#reset-btn");

/* ******************Triangulo******************* */
const inputBaseTriangulo = document.querySelector(".trianguloBase");
const inputLado1Triangulo = document.querySelector(".lado1");
const inputLado2Triangulo = document.querySelector(".lado2");
const bottonTriangulo = document.querySelector(".btn-triangulo");
const baseTriangulo = document.querySelector(".baseTriangulo");
const ladoUno = document.querySelector(".lado1span");
const ladoDos = document.querySelector(".lado2span");
const PerimetroTriangulo = document.querySelector(".perimetroTriangulo");
const AreaTriangulo = document.querySelector(".areaTriangulo");
const inputMensajeTriangulo = document.querySelector(".mensajeTriangulo");
const resetBtnTriangulo = document.querySelector("#reset-btn-triangulo");

/* ******************Circulo******************** */
const circulo = document.querySelector(".radioCirculo");
const btnCalcularCirculo = document.querySelector(".btn-circulo");
const radio = document.querySelector(".radio");
const diametro = document.querySelector(".diametro");
const perimetroCirculo = document.querySelector(".perimetroCirculo");
const areaCirculo = document.querySelector(".areaCirculo");
const mensajeCirculo = document.querySelector(".mensajeCirculo");
const resetCirculo = document.querySelector("#reset-btn-circulo");
/* ************************************************ */
resetBtn.addEventListener("click", function () {
    resetResultadoRectangulo();
});
resetBtnTriangulo.addEventListener("click", function () {
    resetResultadoTriangulo();
});
resetCirculo.addEventListener("click", function () {
    resetResultadoCirculo();
});

/* ***************************************** */
const base = inputRectBase.value;
const altura = inputRectAltura.value;
/* ****************************************** */
function resetResultadoRectangulo() {
    document.querySelector(".rectanguloBase").value = "";
    document.querySelector(".rectanguloAltura").value = "";

    document.querySelector(".base").innerHTML = "";
    document.querySelector(".altura").innerHTML = "";
    document.querySelector(".perimetro").innerHTML = "";
    document.querySelector(".area").innerHTML = "";
    document.querySelector(".mensaje").innerHTML = "";
}
function perimetro(base, altura) {
    const perimetro = (base + altura) * 2;
    console.log(perimetro);
    return perimetro;
}
function area(base, altura) {
    return base * altura;
}
inputRectBase.addEventListener("input", () => {
    if (inputRectBase.value <= 0) {
        mensaje.innerHTML = `El valor debe ser mayor a cero`;
    }
    cuadradoBase.innerHTML = `Base = ${inputRectBase.value}`;
});
inputRectAltura.addEventListener("input", () => {
    if (inputRectBase.value <= 0) {
        mensaje.innerHTML = `El valor debe ser mayor a cero`;
    }
    cuadradoAltura.innerHTML = `Altura = ${inputRectAltura.value}`;
});
inputRectBotton.addEventListener("click", () => {
    const base = Number(inputRectBase.value);
    const altura = Number(inputRectAltura.value);
    cuadradoPerimetro.innerHTML = `Perimetro = ${perimetro(base, altura)}`;
    cuadradoArea.innerHTML = `Area = ${area(base, altura)}`;
});
/* ******************************************* */
function resetResultadoTriangulo() {
    document.querySelector(".trianguloBase").value = "";
    document.querySelector(".lado1").value = "";
    document.querySelector(".lado2").value = "";

    document.querySelector(".baseTriangulo").innerHTML = "";
    document.querySelector(".lado1span").innerHTML = "";
    document.querySelector(".lado2span").innerHTML = "";

    document.querySelector(".perimetroTriangulo").innerHTML = "";
    document.querySelector(".areaTriangulo").innerHTML = "";
    document.querySelector(".mensajeTriangulo").innerHTML = "";
}
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function perimetroDelTriangulo(base, lado1, lado2) {
    let a = base;
    let b = lado1;
    let c = lado2;
    // prettier-ignore
    return (a + lado1 + lado2);
}
function areaDelTriangulo(base, lado1, lado2) {
    let a = base;
    let b = lado1;
    let c = lado2;

    // prettier-ignore
    const  altura =  Math.sqrt((b ** 2) - (a ** 2) / 4);
    // prettier-ignore
    return Math.floor((a * altura) / 2);
}

/* ******************************************* */
inputBaseTriangulo.addEventListener("input", () => {
    if (inputBaseTriangulo.value <= 0) {
        inputMensajeTriangulo.innerHTML = `El valor debe ser mayor a cero`;
    }
    baseTriangulo.innerHTML = `Base = ${inputBaseTriangulo.value}`;
});
inputLado1Triangulo.addEventListener("input", () => {
    if (inputLado1Triangulo.value <= 0) {
        inputMensajeTriangulo.innerHTML = `Mensaje = El valor debe ser mayor a cero`;
    }
    ladoUno.innerHTML = `Lado 1: = ${inputLado1Triangulo.value}`;
});
inputLado2Triangulo.addEventListener("input", () => {
    if (inputLado2Triangulo.value <= 0) {
        inputMensajeTriangulo.innerHTML = `Mensaje = El valor debe ser mayor a cero`;
    }
    ladoDos.innerHTML = `Lado 2: = ${inputLado2Triangulo.value}`;
});
bottonTriangulo.addEventListener("click", () => {
    const base = Number(inputBaseTriangulo.value);

    const lado1 = Number(inputLado1Triangulo.value);

    const lado2 = Number(inputLado2Triangulo.value);

    PerimetroTriangulo.innerHTML = `Perimetro = ${perimetroDelTriangulo(
        base,
        lado1,
        lado2
    )}`;

    AreaTriangulo.innerHTML = `Area = ${areaDelTriangulo(base, lado1, lado2)}`;
});
/* ******************Circulo************** */
function resetResultadoCirculo() {
    document.querySelector(".radioCirculo").value = "";

    document.querySelector(".radio").innerHTML = "";
    document.querySelector(".diametro").innerHTML = "";
    document.querySelector(".perimetroCirculo").innerHTML = "";
    document.querySelector(".areaCirculo").innerHTML = "";
    document.querySelector(".mensajeCirculo").innerHTML = "";
}
function diametrDelCirculo(radio) {
    return radio * 2;
}
function perimetroDelCirculo(radio) {
    const diametro = radio * 2;
    return diametro * Math.PI.toFixed(1);
}
function areaDelCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);
    return radioAlCuadrado * Math.PI.toFixed(1);
}
circulo.addEventListener("input", () => {
    const radioCirculo = Number(circulo.value);

    if (radioCirculo <= 0) {
        mensajeCirculo.innerHTML = `El valor ingresado :( ${radioCirculo}), debe ser mayor de cero`;
    } else {
        radio.innerHTML = `Radio = ${radioCirculo}`;
    }
});
btnCalcularCirculo.addEventListener("click", () => {
    const radioCirculo = Number(circulo.value);
    diametro.innerHTML = `Diametro = ${diametrDelCirculo(radioCirculo)}`;
    perimetroCirculo.innerHTML = `Perimetro = ${perimetroDelCirculo(
        radioCirculo
    )}`;
    areaCirculo.innerHTML = `Area = ${areaDelCirculo(radioCirculo)}`;
});
