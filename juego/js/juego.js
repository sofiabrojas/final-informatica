const preguntas = [
    {
        pregunta: "¿En qué civilización comenzó la historia de la industria textil?",
        opciones: ["En la antigua civilización egipcia", "En la Antigua Grecia", "En el Imperio Romano"],
        respuestaCorrecta: "En la antigua civilización egipcia"
    },
    {
        pregunta: "¿Qué son los materiales textiles?",
        opciones: ["Son aquellos que se utilizan para fabricar tejidos, prendas de vestir y otros productos.", "Son únicamente fibras naturales utilizadas en decoraciones de interiores.", "Materiales usados exclusivamente para construir maquinaria textil."],
        respuestaCorrecta: "Son aquellos que se utilizan para fabricar tejidos, prendas de vestir y otros productos."
    },
    {
        pregunta: "¿Qué técnica artesanal utiliza bloques de madera tallados con diseños específicos?",
        opciones: ["Estampado por Bloque (Block Printing)", "Estampado Digital", "Serigrafía Tradicional"],
        respuestaCorrecta: "Estampado por Bloque (Block Printing)"
    },
    {
        pregunta: "¿Cuál es una de las industrias más afectadas por el trabajo infantil y forzoso?",
        opciones: ["La industria textil", "La industria tecnológica", "La industria automotriz"],
        respuestaCorrecta: "La industria textil"
    },
    {
        pregunta: "¿Qué técnica consiste en transferir tinta especial al tejido mediante calor y presión?",
        opciones: ["Sublimación", "Impresión Offset", "Transferencia por Bloque"],
        respuestaCorrecta: "Sublimación"
    },
    {
        pregunta: "¿Qué es el bordado?",
        opciones: ["Es un arte milenario que consiste en decorar telas utilizando aguja e hilo.", "Es un proceso industrial para producir telas en grandes cantidades.", "Una técnica que consiste en imprimir diseños directamente en telas."],
        respuestaCorrecta: "Es un arte milenario que consiste en decorar telas utilizando aguja e hilo."
    },
    {
        pregunta: "¿De dónde proviene el arte textil en México?",
        opciones: ["De las civilizaciones prehispánicas que habitaban la región antes de la llegada de los españoles.", "De la influencia europea durante la Revolución Mexicana.", "Del comercio con Asia en el siglo XX."],
        respuestaCorrecta: "De las civilizaciones prehispánicas que habitaban la región antes de la llegada de los españoles."
    },
    {
        pregunta: "¿Qué son los tejidos sostenibles?",
        opciones: ["Son tejidos producidos de manera responsable, minimizando el impacto ambiental.", "Son telas exclusivamente hechas con fibras sintéticas para reducir costos.", "Telas que no necesitan procesos de teñido ni acabado para su fabricación."],
        respuestaCorrecta: "Son tejidos producidos de manera responsable, minimizando el impacto ambiental."
    },
    {
        pregunta: "¿Cuántas toneladas de residuos textiles se generan cada año?",
        opciones: ["92 millones de toneladas.", "10 millones de toneladas.", "200 millones de toneladas."],
        respuestaCorrecta: "92 millones de toneladas."
    }
];

let preguntaActual = 0;
let puntuacion = 0;
let tiempoRestante = 20;
let temporizador;

const preguntaContainer = document.getElementById("pregunta-container");
const preguntaElemento = document.getElementById("pregunta");
const opcionesElemento = document.getElementById("opciones");
const resultadoContainer = document.getElementById("resultado-container");
const resultadoElemento = document.getElementById("resultado");
const cronometroElemento = document.getElementById("cronometro");
const botonReiniciar = document.getElementById("reiniciar");

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaElemento.textContent = pregunta.pregunta;
    opcionesElemento.innerHTML = "";

    pregunta.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.classList.add("btn", "btn-outline-primary");
        boton.addEventListener("click", () => verificarRespuesta(opcion));
        opcionesElemento.appendChild(boton);
    });

    iniciarCronometro();
}

function verificarRespuesta(respuestaSeleccionada) {
    clearInterval(temporizador);
    if (respuestaSeleccionada === preguntas[preguntaActual].respuestaCorrecta) {
        puntuacion++;
    }

    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        tiempoRestante = 20;
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function iniciarCronometro() {
    tiempoRestante = 20;
    actualizarCronometro();

    temporizador = setInterval(() => {
        tiempoRestante--;
        actualizarCronometro();

        if (tiempoRestante === 0) {
            verificarRespuesta(null); // Considerar como respuesta incorrecta
        }
    }, 1000);
}

function actualizarCronometro() {
    cronometroElemento.textContent = `Tiempo restante: ${tiempoRestante} segundos`;
}

function mostrarResultado() {
    preguntaContainer.style.display = "none";
    resultadoContainer.style.display = "block";
    resultadoElemento.textContent = `Obtuviste ${puntuacion} de ${preguntas.length} respuestas correctas.`;
}

botonReiniciar.addEventListener("click", () => {
    preguntaActual = 0;
    puntuacion = 0;
    tiempoRestante = 20;
    preguntaContainer.style.display = "block";
    resultadoContainer.style.display = "none";
    mostrarPregunta();
});

mostrarPregunta();