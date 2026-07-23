// 1. Selección de elementos del DOM
const btnAbrirModal = document.getElementById('btn-abrir-modal');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');
const modalVideo = document.getElementById('modal-video');
const iframeVideo = document.getElementById('iframe-video');

// Guardamos el enlace del video para pausarlo al cerrar
const urlVideo = iframeVideo.src;

// 2. Función para abrir el modal
btnAbrirModal.addEventListener('click', () => {
  modalVideo.classList.add('activo');
  // Restauramos la URL para asegurar que el video esté listo
  iframeVideo.src = urlVideo;
});

// 3. Función para cerrar el modal
const cerrarModal = () => {
  modalVideo.classList.remove('activo');
  // Limpiamos el src del iframe para que el audio del video se detenga al cerrar
  iframeVideo.src = '';
};

btnCerrarModal.addEventListener('click', cerrarModal);

// 4. Cerrar si el usuario hace clic fuera de la caja del modal
modalVideo.addEventListener('click', (e) => {
  if (e.target === modalVideo) {
    cerrarModal();
  }
});