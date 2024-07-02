// Variables
let totalPersonas = 0;
const personas = JSON.parse(localStorage.getItem('personas')) || [];
const capacidadMaxima = 20; 
const tragos = [
    { nombre: 'Stella', precio: 5000 },
    { nombre: 'Smirnoff', precio: 10000 },
    { nombre: 'Absolut', precio: 15000 },
];
let tragosPedidos = JSON.parse(localStorage.getItem('tragosPedidos')) || 0;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    totalPersonas = personas.length;
    mostrarResultado(`Capacidad actual: ${totalPersonas}/20`);
    mostrarResultado(`Tragos pedidos: ${tragosPedidos}`);
});

// Función para entrar persona
function entrarPersona() {
    if (totalPersonas >= capacidadMaxima) {
        mostrarResultado("Lo siento, V.I.P lleno.");
        return;
    }

    const nombreInput = document.getElementById('nombrePersona');
    const nombre = nombreInput.value.trim();
    if (nombre) {
        totalPersonas++;
        personas.push({ nombre: nombre });
        localStorage.setItem('personas', JSON.stringify(personas));
        mostrarResultado(`${nombre} entró al VIP. Capacidad: ${totalPersonas}/20`);
        nombreInput.value = '';
    } else {
        mostrarResultado("Por favor, ingresa un nombre.");
    }
}

// Función para pedir trago
function pedirTrago() {
    if (tragosPedidos >= 5) {
        mostrarResultado("Deja de tomar o llamo a seguridad.");
        return;
    }

    const tragoInput = document.getElementById('nombreTrago');
    const tragoNombre = tragoInput.value.trim();
    const trago = tragos.find(t => t.nombre.toLowerCase() === tragoNombre.toLowerCase());
    if (trago) {
        tragosPedidos++;
        localStorage.setItem('tragosPedidos', JSON.stringify(tragosPedidos));
        mostrarResultado(`Pediste ${trago.nombre} y te va a salir $${trago.precio}. Ya te tomaste esta cantidad de tragos: ${tragosPedidos}`);
        tragoInput.value = '';
    } else {
        mostrarResultado("Ese no lo tenemos.");
    }
}

// Función para mostrar resultados
function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    const p = document.createElement('p');
    p.textContent = mensaje;
    resultadoDiv.appendChild(p);
}
