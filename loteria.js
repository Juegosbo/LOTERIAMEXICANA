// Asegúrate de que el array de imágenes esté definido correctamente
const images = [
    'imagen1.PNG', 'imagen2.PNG', 'imagen3.PNG', 'imagen4.PNG', 'imagen5.PNG', 
    'imagen6.PNG', 'imagen7.PNG', 'imagen8.PNG', 'imagen9.PNG', 'imagen10.PNG', 
    'imagen11.PNG', 'imagen12.PNG', 'imagen13.PNG', 'imagen14.PNG', 'imagen15.PNG', 
    'imagen16.PNG', 'imagen17.PNG', 'imagen18.PNG', 'imagen19.PNG', 'imagen20.PNG', 
    'imagen21.PNG', 'imagen22.PNG', 'imagen23.PNG', 'imagen24.PNG', 'imagen25.PNG', 
    'imagen26.PNG', 'imagen27.PNG', 'imagen28.PNG', 'imagen29.PNG', 'imagen30.PNG', 
    'imagen31.PNG', 'imagen32.PNG', 'imagen33.PNG', 'imagen34.PNG', 'imagen35.PNG', 
    'imagen36.PNG', 'imagen37.PNG', 'imagen38.PNG', 'imagen39.PNG', 'imagen40.PNG', 
    'imagen41.PNG', 'imagen42.PNG', 'imagen43.PNG', 'imagen44.PNG', 'imagen45.PNG', 
    'imagen46.PNG', 'imagen47.PNG', 'imagen48.PNG', 'imagen49.PNG', 'imagen50.PNG', 
    'imagen51.PNG', 'imagen52.PNG', 'imagen53.PNG', 'imagen54.PNG'
];

const totalCartones = 50;
const cartonesPorPagina = 4;
let paginaActual = 1;

const cartonesContainer = document.getElementById('cartones-container');
const paginationContainer = document.getElementById('pagination');
const maestroContainer = document.getElementById('maestro');

// Función para mezclar las imágenes
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Crear cartón con imágenes aleatorias
function createCarton(images, numero) {
    const carton = {
        numero: numero,
        nombre: `Cartón ${numero}`,
        imagenes: shuffle(images.slice()).slice(0, 16)
    };
    return carton;
}

// Generar todos los cartones
function generateCartones() {
    let cartones = JSON.parse(localStorage.getItem('cartones'));

    if (!cartones) {
        cartones = [];
        for (let i = 1; i <= totalCartones; i++) {
            cartones.push(createCarton(images, i));
        }
        localStorage.setItem('cartones', JSON.stringify(cartones));
    }

    return cartones;
}

// Mostrar cartones en la página actual
function displayCartones(cartones, pagina) {
    cartonesContainer.innerHTML = '';
    const inicio = (pagina - 1) * cartonesPorPagina;
    const fin = inicio + cartonesPorPagina;
    const cartonesPagina = cartones.slice(inicio, fin);

    cartonesPagina.forEach(carton => {
        const cartonDiv = document.createElement('div');
        cartonDiv.className = 'carton';

        const titulo = document.createElement('h3');
        titulo.innerText = `${carton.nombre} (#${carton.numero})`;
        cartonDiv.appendChild(titulo);

        carton.imagenes.forEach(image => {
            const img = document.createElement('img');
            img.src = `images/${image}`;
            cartonDiv.appendChild(img);
        });

        cartonesContainer.appendChild(cartonDiv);
    });
}

// Mostrar botones de paginación
function setupPagination(totalPaginas) {
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPaginas; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.onclick = () => {
            paginaActual = i;
            displayCartones(cartones, paginaActual);
        };
        paginationContainer.appendChild(button);
    }
}

// Crear el cartón maestro
function createCartonMaestro() {
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = `images/${image}`;
        img.className = 'maestro-image';
        img.onclick = () => marcarImagenEnCartones(image);
        maestroContainer.appendChild(img);
    });
}

// Marcar imagen en los cartones de los jugadores
function marcarImagenEnCartones(imagen) {
    const cartones = JSON.parse(localStorage.getItem('cartones'));

    cartones.forEach(carton => {
        const index = carton.imagenes.indexOf(imagen);
        if (index !== -1) {
            const cartonesDivs = cartonesContainer.querySelectorAll('.carton');
            cartonesDivs.forEach(cartonDiv => {
                const imgs = cartonDiv.querySelectorAll('img');
                imgs.forEach(img => {
                    if (img.src.includes(imagen)) {
                        img.style.opacity = '0.5'; // Marcar imagen
                    }
                });
            });
        }
    });
}

// Reiniciar el juego
document.getElementById('reset-game').onclick = () => {
    localStorage.removeItem('cartones');
    window.location.reload();
};

// Inicializar el juego
const cartones = generateCartones();
const totalPaginas = Math.ceil(cartones.length / cartonesPorPagina);

displayCartones(cartones, paginaActual);
setupPagination(totalPaginas);
createCartonMaestro();
