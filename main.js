
function entrarATienda(event) {
  event.preventDefault();

  // Reproduce sonido de pasos
  const pasos = document.getElementById('sonido-pasos');
  pasos.play();

  // Animación de entrada (camino hacia la tienda)
  const entrada = document.querySelector('.entrada');
  entrada.style.transition = 'opacity 2s ease, transform 4s ease';
  entrada.style.opacity = 0;
  entrada.style.transform = 'scale(1.2)';

  // Reproduce sonido de puerta al entrar
  setTimeout(() => {
    const puerta = document.getElementById('sonido-puerta');
    puerta.play();
    entrada.style.display = 'none';
    document.querySelector('.tienda').style.opacity = 1;

    // Reproduce música ambiental relajada
    const musica = document.getElementById('musica');
    musica.volume = 0.3;
    musica.play();
  }, 2500); // Sonido puerta tras 2.5 segundos
}
