
const nombreInput = document.getElementById('nombre');
const fechaInput = document.getElementById('fecha');
const countdownElement = document.getElementById('cuentaRegresiva');

function countdown() {
  const fechaCumple = fechaInput.value;
  const now = new Date();
  const dateCumple = new Date(fechaCumple);
  let timeDiff = (dateCumple.getTime() - now.getTime()) / 1000;

  if (timeDiff <= 0) {
    countdownElement.innerHTML = `¡Feliz Cumpleaños!`;
    return;
  }

  const days = Math.floor(timeDiff / (24 * 60 * 60));
  timeDiff = timeDiff % (24 * 60 * 60);

  const hours = Math.floor(timeDiff / (60 * 60));
  timeDiff = timeDiff % (60 * 60);

  const minutes = Math.floor(timeDiff / 60);
  timeDiff = timeDiff % 60;

  const seconds = Math.floor(timeDiff);

  let mensaje = `¡Faltan ${days} dias, ${hours} hs, ${minutes} min y ${seconds} seg!🎉 🎂🥳`;

  countdownElement.innerHTML = mensaje;

  setTimeout(countdown, 1000);
}

function compartir() {
  const url = window.location.href;
  const nombre = nombreInput.value;
  const fecha = fechaInput.value;
  const mensaje = encodeURIComponent(`¡No te pierdas la fiesta de cumpleaños de ${encodeURIComponent(nombre)} en Natatotio UP el ${encodeURIComponent(fecha)}!, ingresá acá: ${encodeURIComponent(url)}`);
  window.open(`whatsapp://send?text=${mensaje}`);
}

function establecerDatosDesdeUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const nombre = urlParams.get('nombre');
  const fecha = urlParams.get('fecha');
  if (nombre) {
    document.getElementById('nombre').value = decodeURIComponent(nombre);
  }
  if (fecha) {
    document.getElementById('fecha').value = fecha;
  }
  sessionStorage.setItem('nombre', document.getElementById('nombre').value);
  sessionStorage.setItem('fecha', document.getElementById('fecha').value);
}

function establecerNombreYFecha() {
  const nombreGuardado = sessionStorage.getItem('nombre');
  const fechaGuardada = sessionStorage.getItem('fecha');
  if (nombreGuardado) {
    document.getElementById('nombre').value = nombreGuardado;
  } else {
    document.getElementById('nombre').value = '';
  }
  if (fechaGuardada) {
    document.getElementById('fecha').value = fechaGuardada;
  } else {
    document.getElementById('fecha').value = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  establecerNombreYFecha();
  countdown();
});

document.getElementById('compartir').addEventListener('click', compartir);
document.getElementById('nombre').addEventListener('input', () => {
  sessionStorage.setItem('nombre', document.getElementById('nombre').value);
});
document.getElementById('fecha').addEventListener('input', () => {
  sessionStorage.setItem('fecha', document.getElementById('fecha').value);
})

const confirmPresenceInput = document.getElementById("confirm-presence");
const confirmPresenceText = document.getElementById("confirm-presence-text");
confirmPresenceInput.addEventListener("click", function() {
  if (confirmPresenceInput.checked) {
    // input está activo, el invitado confirmó su presencia
    confirmPresenceText.innerHTML = "Confirmado";
  } else {
    // input está inactivo, el invitado no confirmó su presencia
    confirmPresenceText.innerHTML = "Confirmá presencia";
  }
});
 