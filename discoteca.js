// variables
let totalPersonas = 0;
const personas = []; 
const capacidadMaxima = 20; 
const tragos = [
    { nombre: 'Cerveza', precio: 5000 },
    { nombre: 'Vodka', precio: 10000 },
    { nombre: 'Whisky', precio: 15000 },
];
let tragosPedidos = 0; // contador de los tragos que pedis

// cuanta gente entra al boliche
function entrarPersona() {
    if (totalPersonas >= capacidadMaxima) {
        alert("Capacidad máxima alcanzada. No pueden entrar más personas al boliche.");
        return;
    }

    const nombre = prompt("Ingrese el nombre de la persona:");
    if (nombre) {
        totalPersonas++;
        personas.push({ nombre: nombre });
        mostrarResultado(`${nombre} entro al boliche. Capacidad: ${totalPersonas}/20`);
    }
}

// funcion para pedir tragos
function pedirTrago() {
    if (tragosPedidos >= 5) {
        alert("No puedes tomar más de 5 tragos.");
        return;
    }

    const tragoNombre = prompt("Ingrese el nombre del trago (Cerveza, Vodka, Whisky):");
    const trago = tragos.find(t => t.nombre.toLowerCase() === tragoNombre.toLowerCase());
    if (trago) {
        tragosPedidos++;
        mostrarResultado(`Pediste ${trago.nombre} y te va a salir $${trago.precio}. Cantidad de tragos que pediste: ${tragosPedidos}`);
    } else {
        mostrarResultado(`Trago no disponible.`);
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
