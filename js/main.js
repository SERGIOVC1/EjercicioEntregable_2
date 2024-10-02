// 1. Almacenar el elemento cuyo id es "cardContainer" en una constante llamada cardContainer
const cardContainer = document.getElementById('cardContainer');

// 1. Eliminar el primer elemento hijo desde el padre
cardContainer.removeChild(cardContainer.firstElementChild);

// 2. Eliminar desde el propio elemento el elemento cuya clase es "cards redClass"
const redClassElement = document.querySelector('.cards.redClass');
redClassElement.remove();

// 3. Crear un elemento h1 con vuestro nombre
const h1Nombre = document.createElement('h1');
h1Nombre.textContent = 'Sergio Velasco Carballido';

// 4. Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del Vedruna
const enlaceVedruna = document.createElement('a');
enlaceVedruna.textContent = 'Vedruna';
enlaceVedruna.href = 'https://fundacionvedrunaeducacion.org/'; // Ajusta el enlace según sea necesario

// 5. Crear un elemento botón cuyo id sea "botonJoker" y su texto sea "boton"
const botonJoker = document.createElement('button');
botonJoker.id = 'botonJoker';
botonJoker.textContent = 'boton';

// 6. Crear un elemento div cuya clase sea "cards greenClass"
const divGreenClass = document.createElement('div');
divGreenClass.classList.add('cards', 'greenClass');

// 7. Añadir al elemento div creado anteriormente los h1, enlace y botón creados anteriormente
divGreenClass.appendChild(h1Nombre);
divGreenClass.appendChild(enlaceVedruna);
divGreenClass.appendChild(botonJoker);

// 8. Añadir a cardContainer el div del apartado anterior
cardContainer.appendChild(divGreenClass);