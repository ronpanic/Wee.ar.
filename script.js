window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Obtener los botones
const blackButton = document.getElementById('black-button');
const whiteButton = document.getElementById('white-button');

// Agregar evento de clic a cada botón
blackButton.addEventListener('click', () => {
  // Si el botón negro ya está seleccionado, quitar la selección
  if (blackButton.classList.contains('selected')) {
    blackButton.classList.remove('selected');
  } else {
    // Deseleccionar el botón blanco
    whiteButton.classList.remove('selected');
    // Seleccionar el botón negro
    blackButton.classList.add('selected');
  }
});

whiteButton.addEventListener('click', () => {
  // Si el botón blanco ya está seleccionado, quitar la selección
  if (whiteButton.classList.contains('selected')) {
    whiteButton.classList.remove('selected');
  } else {
    // Deseleccionar el botón negro
    blackButton.classList.remove('selected');
    // Seleccionar el botón blanco
    whiteButton.classList.add('selected');
  }
});



