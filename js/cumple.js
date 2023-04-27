

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
  const urlParams = new URLSearchParams();
  urlParams.set('nombre', nombreInput.value);
  urlParams.set('fecha', fechaInput.value);
  const url = window.location.href.split('?')[0] + '?' + urlParams.toString();
  const mensaje = `¡No te pierdas la fiesta de cumpleaños de ${nombreInput.value} en Natatotio UP el ${fechaInput.value}!, ingresá acá: ${url}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
  window.open(whatsappUrl);
}


function establecerDatosDesdeUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const nombre = urlParams.get('nombre');
  const fecha = urlParams.get('fecha');
  if (nombreInput && nombre) {
    nombreInput.value = decodeURIComponent(nombre);
  }
  if (fechaInput && fecha) {
    fechaInput.value = fecha;
  }
  countdown();
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

document.addEventListener('DOMContentLoaded', function() {
  establecerNombreYFecha();
  countdown();
});

document.getElementById('compartir').addEventListener('click', compartir);
document.getElementById('nombre').addEventListener('input', function() {
  sessionStorage.setItem('nombre', document.getElementById('nombre').value);
});
document.getElementById('fecha').addEventListener('input', function() {
  sessionStorage.setItem('fecha', document.getElementById('fecha').value);
});

const confirmPresenceInput = document.getElementById("confirm-presence");
const confirmPresenceText = document.getElementById("confirm-presence-text");
confirmPresenceInput.addEventListener("click", function() {
  if (confirmPresenceInput.checked) {
     confirmPresenceText.innerHTML = "Confirmado";
  } else {
    confirmPresenceText.innerHTML = "Confirmá presencia";
  }
});

