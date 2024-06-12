// Variables necesarias
let totalPersonas = 0;
const personas = [];
const tragos = [
    { nombre: 'Cerveza', precio: 5.000  },
    { nombre: 'Vodka', precio: 10.000 },
    { nombre: 'Whisky', precio: 15.000 },
    
];

// Función para capturar entrada de personas
function entrarPersona() {
    const nombre = prompt("nombre de la persona que entra al boliche:");
    if (nombre) {
        totalPersonas++;
        personas.push({ nombre: nombre });
        mostrarResultado(`${nombre} entró al Boliche. Total de personas: ${totalPersonas}`);
    }
}

// Función para pedir trago
function pedirTrago() {
    const tragoNombre = prompt("Ingrese el nombre del trago (Cerveza, Vodka, Whisky):");
    const trago = tragos.find(t => t.nombre.toLowerCase() === tragoNombre.toLowerCase());
    if (trago) {
        mostrarResultado(`Se ha pedido un ${trago.nombre} que cuesta $${trago.precio}.`);
    } else {
        mostrarResultado(`Trago no disponible.`);
    }
}

// Función para mostrar resultados
function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    const p = document.createElement('p');
    p.textContent = mensaje;
    resultadoDiv.appendChild(p);
}

// Declaración de objetos
const persona = {
    nombre: '',
    edad: 0,
    esVip: false
};

const trago = {
    nombre: '',
    precio: 0,
};
