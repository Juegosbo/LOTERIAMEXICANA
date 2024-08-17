conts images = [
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
const cartonesContainer = document.getElementById('cartones');

function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]], array[i];
   }
  return array;
}

function createCarton(images) {
const carton = document.createElement('div');
carton.calssName = 'carton';

const shuffledImagens = shuffle(images.slice()).slice(0,6) //tomamos 16 imagen aletorias
shuffledImages.forEach(image => {
const img = document.createElement('img');
img.src = 'images/${image]'; //asumiendo que las imagenes estan en una carpeta llamado images
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
