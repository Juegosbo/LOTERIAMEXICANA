// Asegúrate de que el array de imágenes esté definido correctamente
const images = [
    'imagen1.png', 'imagen2.png', 'imagen3.png', 'imagen4.png', 'imagen5.png', 
    'imagen6.png', 'imagen7.png', 'imagen8.png', 'imagen9.png', 'imagen10.png', 
    'imagen11.png', 'imagen12.png', 'imagen13.png', 'imagen14.png', 'imagen15.png', 
    'imagen16.png', 'imagen17.png', 'imagen18.png', 'imagen19.png', 'imagen20.png', 
    'imagen21.png', 'imagen22.png', 'imagen23.png', 'imagen24.png', 'imagen25.png', 
    'imagen26.png', 'imagen27.png', 'imagen28.png', 'imagen29.png', 'imagen30.png', 
    'imagen31.png', 'imagen32.png', 'imagen33.png', 'imagen34.png', 'imagen35.png', 
    'imagen36.png', 'imagen37.png', 'imagen38.png', 'imagen39.png', 'imagen40.png', 
    'imagen41.png', 'imagen42.png', 'imagen43.png', 'imagen44.png', 'imagen45.png', 
    'imagen46.png', 'imagen47.png', 'imagen48.png', 'imagen49.png', 'imagen50.png', 
    'imagen51.png', 'imagen52.png', 'imagen53.png', 'imagen54.png'
];

const totalCartones = 50;
const cartonesContainer = document.getElementById('cartones');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCarton(images) {
    const carton = document.createElement('div');
    carton.className = 'carton';
    
    const shuffledImages = shuffle(images.slice()).slice(0, 16); // Tomamos 16 imágenes aleatorias
    shuffledImages.forEach(image => {
        const img = document.createElement('img');
        img.src = `images/${image}`; // Asegúrate de que las imágenes estén en la carpeta 'images'
        carton.appendChild(img);
    });

    return carton;
}

function generateCartones() {
    for (let i = 0; i < totalCartones; i++) {
        const carton = createCarton(images);
        cartonesContainer.appendChild(carton);
    }
}

generateCartones();
