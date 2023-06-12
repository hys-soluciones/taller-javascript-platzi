const salarios = [];
salarios.push({
    name: "Juanita",
    trabajos: [
        { year: 2018, empresa: "Freelance", salario: 250 },
        { year: 2019, empresa: "Freelance", salario: 250 },
        { year: 2020, empresa: "Industrias Mokepon", salario: 850 },
        { year: 2021, empresa: "Industrias Mokepon", salario: 1050 },
        { year: 2022, empresa: "Industrias Mokepon", salario: 1250 },
        { year: 2023, empresa: "Industrias Mokepon", salario: 1250 },

        // { year: 2024, salario: 1250, },
    ],
});
salarios.push({
    name: "Alex",
    trabajos: [
        { year: 2018, empresa: "Freelance", salario: 450 },
        { year: 2019, empresa: "Freelance", salario: 550 },
        { year: 2020, empresa: "Freelance", salario: 400 },
        { year: 2021, empresa: "Industrias Mokepon", salario: 1050 },
        { year: 2022, empresa: "Industrias Mokepon", salario: 1250 },
        { year: 2023, empresa: "Industrias Mokepon", salario: 1250 },
    ],
});
salarios.push({
    name: "Nath",
    trabajos: [
        { year: 2018, empresa: "Freelance", salario: 600 },
        { year: 2019, empresa: "Freelance", salario: 625 },
        { year: 2020, empresa: "Freelance", salario: 575 },
        { year: 2021, empresa: "MarketerosCOL", salario: 1000 },
        { year: 2022, empresa: "MarketerosCOL", salario: 1000 },
        { year: 2023, empresa: "MarketerosCOL", salario: 1100 },
    ],
});
salarios.push({
    name: "Julia",
    trabajos: [
        { year: 2018, empresa: "MarketerosCOL", salario: 1000 },
        { year: 2019, empresa: "MarketerosCOL", salario: 2000 },
        { year: 2020, empresa: "MarketerosCOL", salario: 2000 },
        { year: 2021, empresa: "MarketerosCOL", salario: 2000 },
        { year: 2022, empresa: "MarketerosCOL", salario: 2000 },
        { year: 2023, empresa: "MarketerosCOL", salario: 2000 },
    ],
});
salarios.push({
    name: "Jonatan",
    trabajos: [
        { year: 2019, empresa: "MarketerosCOL", salario: 1000 },
        { year: 2020, empresa: "MarketerosCOL", salario: 1000 },
        { year: 2021, empresa: "MarketerosCOL", salario: 800 },
        { year: 2022, empresa: "MarketerosCOL", salario: 900 },
        { year: 2023, empresa: "MarketerosCOL", salario: 1000 },
    ],
});
salarios.push({
    name: "Armando",
    trabajos: [
        { year: 2018, empresa: "Freelance", salario: 750 },
        { year: 2019, empresa: "Freelance", salario: 750 },
        { year: 2020, empresa: "Freelance", salario: 750 },
        { year: 2021, empresa: "Freelance", salario: 850 },
        { year: 2022, empresa: "Freelance", salario: 850 },
        { year: 2023, empresa: "Freelance", salario: 850 },
    ],
});
salarios.push({
    name: "Dilan",
    trabajos: [
        { year: 2018, empresa: "Freelance", salario: 500 },
        { year: 2019, empresa: "Freelance", salario: 500 },
        { year: 2020, empresa: "Freelance", salario: 600 },
        { year: 2021, empresa: "Mokepon", salario: 1100 },
        { year: 2022, empresa: "Mokepon", salario: 1100 },
        { year: 2023, empresa: "Mokepon", salario: 1100 },
    ],
});
salarios.push({
    name: "Zamir",
    trabajos: [
        { year: 2018, empresa: "Freelance", salario: 400 },
        { year: 2019, empresa: "Freelance", salario: 500 },
        { year: 2020, empresa: "Freelance", salario: 500 },
        { year: 2021, empresa: "Mokepon", salario: 1100 },
        { year: 2022, empresa: "Mokepon", salario: 1100 },
        { year: 2023, empresa: "Mokepon", salario: 1200 },
    ],
});
const persona = document.querySelector("#persona");
const btnPersona = document.querySelector(".btn-analisis-salarial");
const medianaPersona = document.querySelector(".medianaPersona");
const proyeccionSalarial = document.querySelector(".proyeccionSalarial");
const resultadosSalarios = document.querySelector(".resultadoAnalisis");
const resetpersonas = document.querySelector("#reset-btn");
const empresa = document.querySelector(".empresa");
const btnEmpresa = document.querySelector(".btn-calcular-empresa");
const promedioPorYear = document.querySelector(".promedioPorYear");
const proyeccionEmpresa = document.querySelector(
    ".proyecionSalarialPorEmpresa"
);
const promedioGeneral = document.querySelector(".promedioGeneralPorEmpresa");
const resetBtnEmpresa = document.querySelector("#reset-btn-empresa");

/* *******************RESET*************** */
resetpersonas.addEventListener("click", function () {
    restRessultadoPersonas();
});
resetBtnEmpresa.addEventListener("click", function () {
    resetResultadoEmpresa();
});
/* ***************Reset  Function************* */
function restRessultadoPersonas() {
    document.querySelector("#persona").value = "";

    document.querySelector(".medianaPersona").innerHTML = "";
    document.querySelector(".proyeccionSalarial").innerHTML = "";
    document.querySelector(".resultadoAnalisis").innerHTML = "";
}
function resetResultadoEmpresa() {
    document.querySelector(".empresa").value = "";

    document.querySelector(".promedioPorYear").innerHTML = "";
    document.querySelector(".proyecionSalarialPorEmpresa").innerHTML = "";
    document.querySelector(".promedioGeneralPorEmpresa").innerHTML = "";
}
/* *****Para desavilitar elige una persona y una empresa******* */

// Oculta la opción sin valor al abrir el select
persona.addEventListener("mousedown", function () {
    // Obtén la opción sin valor
    var emptyOption = persona.querySelector('option[value=""]');

    // Deshabilita la opción sin valor
    emptyOption.disabled = true;
});
/* ------------------------------- */

// Oculta la opción sin valor al abrir el select
empresa.addEventListener("mousedown", function () {
    // Obtén la opción sin valor
    var emptyOption = empresa.querySelector('option[value=""]');

    // Deshabilita la opción sin valor
    emptyOption.disabled = true;
});
/* *************************************** */
/*            Codigo operaciones           */
// console.log(salarios);
//Analisis personal de juanita

function encontrarPersona(personaBuscada) {
    return salarios.find((persona) => persona.name == personaBuscada);
    /*   const persona = salarios.find((persona) => {
        return persona.name == personaBuscada;
    });
    return persona; */
}
function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map((elemento) => elemento.salario);
    // console.log(salarios);
    const mediana = PlatziMath.calcularMediana(salarios);

    return mediana;
}
/* ******************************************* */

/* ********************************************** */
function calcularProximoSalario(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map((elemento) => elemento.salario);
    const ultimoSalario = salarios[salarios.length - 1];

    const empresas = trabajos.map((elemento) => elemento.empresa);

    const ultimaEmpresa = empresas[empresas.length - 1];

    let proximoSalario = ultimoSalario;
    if (ultimaEmpresa === "Freelance") {
        proximoSalario *= 1.05; // Incremento del 5% para trabajos como freelance
    } else {
        proximoSalario *= 1.1; // Incremento del 10% para trabajos en industrias
    }
    console.log(
        "Ultimo salario:" +
            ultimoSalario +
            "- Proximo Salario : " +
            proximoSalario
    );
    return proximoSalario;
}
/* ******************************************* */
function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    let porcentajesCrecimiento = [];
    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeCrecimiento = crecimiento / salarioAnterior;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(
        porcentajesCrecimiento
    );
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    // console.log(medianaPorcentajeCrecimiento);
    // console.log(ultimoSalario);
    const aumentoSalarial = ultimoSalario * medianaPorcentajeCrecimiento;
    const nuevoSalario = ultimoSalario + aumentoSalarial;
    // console.log(aumentoSalarial);
    // console.log(nuevoSalario);
    return Math.floor(nuevoSalario);
}
/* ************************************************ */
/* *****Analisis Empresarial******* */
/* 
Industrias Mokepon: {
    2018:[salarios,salarios]
    2019
    2020
}
*/
const empresas = {};
for (let persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log(empresas);
/* ******************************************* */
function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn("La empresa no existe ");
    } else if (!empresas[nombre][year]) {
        console.warn("El año no existe");
    } else {
        // console.log(empresas[nombre][year]);
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}
/* ****************************************** */

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn("La empresa no existe ");
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });
        //console.log(listaMedianaYears);
        /* ****************************** */
        let porcentajesCrecimiento = [];
        for (let i = 1; i < listaMedianaYears.length; i++) {
            const medianaActual = listaMedianaYears[i];
            const medianaAnterior = listaMedianaYears[i - 1];
            const crecimiento = medianaActual - medianaAnterior;
            const porcentajeCrecimiento = crecimiento / medianaAnterior;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }
        // console.log(porcentajesCrecimiento);
        const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(
            porcentajesCrecimiento
        );
        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        // console.log(medianaPorcentajeCrecimiento);
        // console.log(ultimaMediana);
        const aumento = ultimaMediana * medianaPorcentajeCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;
        // console.log(aumento);
        // console.log(nuevaMediana);
        return Math.floor(nuevaMediana);
    }
}
// proyeccionPorEmpresa("Industrias Mokepon");

/* *************Analisis general *************/
function medianaGeneral() {
    const listaMedianas = salarios.map((persona) =>
        medianaPorPersona(persona.name)
    );
    const mediana = PlatziMath.calcularMediana(listaMedianas);
    // console.log(listaMedianas, mediana);
    return Math.floor(mediana);
}
// console.log(medianaGeneral());
/* ************************ */
function medianaTop10() {
    const listaMedianas = salarios.map((persona) =>
        medianaPorPersona(persona.name)
    );
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
    // console.log(medianasOrdenadas);
    const cantidad = medianasOrdenadas.length / (medianasOrdenadas.length / 2);

    const limite = medianasOrdenadas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    const medianaTop10 = PlatziMath.calcularMediana(top10);

    // console.log(medianaTop10);
    return medianaTop10;
}
// console.log(medianaTop10());

/* ************* Calcular la informacion recibida y procesarla por persona ********** */

btnPersona.addEventListener("click", () => {
    const personaSolicitada = persona.value;
    console.log(personaSolicitada);
    medianaPersona.innerHTML = `Resultados Mediana de salarios : ${medianaPorPersona(
        personaSolicitada
    )}`;
    /*    proyeccionSalarial.innerHTML = `Resultados proximo Salarios : ${calcularProximoSalario(
        personaSolicitada
    )}`; */
    resultadosSalarios.innerHTML = `Proyeccion del salario del proximo año: ${proyeccionPorPersona(
        personaSolicitada
    )}`;
});
/* ************* Calcular la informacion recibida y procesarla por empresa ********** */
btnEmpresa.addEventListener("click", () => {
    const empresaSolicitada = empresa.value;
    proyeccionEmpresa.innerHTML = `Proyeccion de salario por empresa : ${proyeccionPorEmpresa(
        empresaSolicitada
    )}`;
    promedioPorYear.innerHTML = `Mediana del Top10 : ${medianaTop10()}`;
    promedioGeneral.innerHTML = `Promedio General de las Empresas ${medianaGeneral()}`;
});
