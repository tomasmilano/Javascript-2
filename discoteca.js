// variables
let totalPersonas = 0;
const personas = []; 
const capacidadMaxima = 20; 
const tragos = [
    { nombre: 'Stella', precio: 5000 },
    { nombre: 'Smirnoff', precio: 10000 },
    { nombre: 'Absolut', precio: 15000 },
];
let tragosPedidos = 0; // contador de los tragos que pedis

// cuanta gente entra al boliche
function entrarPersona() {
    if (totalPersonas >= capacidadMaxima) {
        alert("Lo siento, V.I.P lleno.");
        return;
    }

    const nombre = prompt("¿Quien entra? Mujer pasa gratis, Hombre paga $15.000:");
    if (nombre) {
        totalPersonas++;
        personas.push({ nombre: nombre });
        mostrarResultado(`${nombre} entró al VIP. Capacidad: ${totalPersonas}/20`);
    }
}

// funcion para pedir tragos
function pedirTrago() {
    if (tragosPedidos >= 5) {
        alert("Deja de tomar o llamo a seguridad.");
        return;
    }

    const tragoNombre = prompt("¿Que vamos a tomar hoy? (Stella, Smirnoff, Absolut):");
    const trago = tragos.find(t => t.nombre.toLowerCase() === tragoNombre.toLowerCase());
    if (trago) {
        tragosPedidos++;
        mostrarResultado(`Pediste ${trago.nombre} y te va a salir $${trago.precio}. Ya te tomaste esta cantidad de tragos: ${tragosPedidos}` );
    } else {
        mostrarResultado(`Ese no lo tenemos.`);
    }
}

// funcion para mostrar resultados
function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    const p = document.createElement('p');
    p.textContent = mensaje;
    resultadoDiv.appendChild(p);
}

// objetos
const persona = {
    nombre: '',
    edad: 0,
    esVip: false
};

const trago = {
    nombre: '',
    precio: 0,
};
