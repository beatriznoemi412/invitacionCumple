/*function countdown() {
  const nombreInput = document.getElementById('nombre');
  const fechaInput = document.getElementById('fecha');
  const countdownElement = document.getElementById('cuentaRegresiva');
  
  const nombre = nombreInput.value;
  const fechaCumple = fechaInput.value;

  const now = new Date();
  const dateCumple = new Date(fechaCumple);
  let timeDiff = (dateCumple.getTime() - now.getTime()) / 1000;

  if (timeDiff <= 0) {
    countdownElement.innerHTML = `¡Feliz Cumpleaños, ${nombre}!`;
    return;
  }

  const days = Math.floor(timeDiff / (24 * 60 * 60));
  timeDiff = timeDiff % (24 * 60 * 60);

  const hours = Math.floor(timeDiff / (60 * 60));
  timeDiff = timeDiff % (60 * 60);

  const minutes = Math.floor(timeDiff / 60);
  timeDiff = timeDiff % 60;

  const seconds = Math.floor(timeDiff);

  let mensaje = "¡Faltan {dias} dias, {horas} hs, {minutos} min y {segundos} seg!🎉 🎂🥳";


 countdownElement.innerHTML = mensaje.replace("{dias}", days).replace("{horas}", hours).replace( "{minutos}", minutes).replace("{segundos}", seconds).replace("{nombre}", nombre);

  setTimeout(countdown, 1000);
  establecerNombreDesdeUrl();

}
/*
function compartir() {
  let url = window.location.href;
  let mensaje = encodeURIComponent("¡No te pierdas mi fiesta de cumpleaños en Natatotio UP!, ingresá acá:");

  window.open("https://wa.me/?text=" + mensaje  + "%0A" + url);
}

window.addEventListener('load', () => {
  countdown();
});
*/
/*
function compartir() {
  const url = window.location.href;
  const nombre = document.getElementById('nombre').value;
  const mensaje = encodeURIComponent(`¡No te pierdas mi fiesta de cumpleaños en Natatotio UP!, ingresá acá: ${url}?nombre=${nombre} ${document.getElementById('cuentaRegresiva').textContent}`);

  window.open(`https://wa.me/?text=${mensaje}`);
}

function establecerNombreDesdeUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const nombre = urlParams.get('nombre');
  if (nombre) {
    document.getElementById('nombre').value = decodeURIComponent(nombre);
  } else {
    const nombreGuardado = sessionStorage.getItem('nombre');
    if (nombreGuardado) {
      document.getElementById('nombre').value = nombreGuardado;
    } else {
      document.getElementById('nombre').value = 'Invitado';
    }
  }
  sessionStorage.setItem('nombre', document.getElementById('nombre').value);
}
*
function countdown() {
  const nombreInput = document.getElementById('nombre');
  const fechaInput = document.getElementById('fecha');
  const countdownElement = document.getElementById('cuentaRegresiva');
  
  const nombre = nombreInput.value;
  const fechaCumple = fechaInput.value;

  const now = new Date();
  const dateCumple = new Date(fechaCumple);
  let timeDiff = (dateCumple.getTime() - now.getTime()) / 1000;

  if (timeDiff <= 0) {
    countdownElement.innerHTML = `¡Feliz Cumpleaños, ${nombre}!`;
    return;
  }

  const days = Math.floor(timeDiff / (24 * 60 * 60));
  timeDiff = timeDiff % (24 * 60 * 60);

  const hours = Math.floor(timeDiff / (60 * 60));
  timeDiff = timeDiff % (60 * 60);

  const minutes = Math.floor(timeDiff / 60);
  timeDiff = timeDiff % 60;

  const seconds = Math.floor(timeDiff);

  let mensaje = "¡Faltan {dias} dias, {horas} hs, {minutos} min y {segundos} seg!🎉 🎂🥳";


 countdownElement.innerHTML = mensaje.replace("{dias}", days).replace("{horas}", hours).replace( "{minutos}", minutes).replace("{segundos}", seconds).replace("{nombre}", nombre);

  setTimeout(countdown, 1000);
  establecerNombreDesdeUrl();

}

*//*
      function countdown() {
        const nombreInput = document.getElementById('nombre');
        const fechaInput = document.getElementById('fecha');
        const countdownElement = document.getElementById('cuentaRegresiva');
        
        const nombre = nombreInput.value;
        const fechaCumple = fechaInput.value;

        const now = new Date();
        const dateCumple = new Date(fechaCumple);
        let timeDiff = (dateCumple.getTime() - now.getTime()) / 1000;

        if (timeDiff <= 0) {
          countdownElement.innerHTML = `¡Feliz Cumpleaños, ${nombre}!`;
          return;
        }

        const days = Math.floor(timeDiff / (24 * 60 * 60));
        timeDiff = timeDiff % (24 * 60 * 60);

        const hours = Math.floor(timeDiff / (60 * 60));
        timeDiff = timeDiff % (60 * 60);

        const minutes = Math.floor(timeDiff / 60);
        timeDiff = timeDiff % 60;

        const seconds = Math.floor(timeDiff);

        let mensaje = "¡Faltan {dias} dias, {horas} hs, {minutos} min y {segundos} seg!🎉 🎂🥳";


        countdownElement.innerHTML = mensaje.replace("{dias}", days).replace("{horas}", hours).replace( "{minutos}", minutes).replace("{segundos}", seconds).replace("{nombre}", nombre);

        setTimeout(countdown, 1000);
        establecerNombreDesdeUrl();

      }

      function compartir() {
        const url = window.location.href;
        const nombre = document.getElementById('nombre').value;
        const mensaje = encodeURIComponent(`¡No te pierdas la fiesta de cumpleaños en Natatotio UP!, ingresá acá: ${url}?${document.getElementById('cuentaRegresiva').textContent}`);

        window.open(`https://wa.me/?text=${mensaje}`);
      }

      function establecerNombreDesdeUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const nombre = urlParams.get('nombre');
        if (nombre) {
          document.getElementById('nombre').value = decodeURIComponent(nombre);
          sessionStorage.setItem('nombre', nombre);
        } else {
          const nombreGuardado = sessionStorage.getItem('nombre');
          if (nombreGuardado) {
            document.getElementById('nombre').value = nombreGuardado;
          }
        }
      }
      

      window.addEventListener('load', () => {
        countdown();
      });
  
*/
function countdown() {
  const nombreInput = document.getElementById('nombre');
  const fechaInput = document.getElementById('fecha');
  const countdownElement = document.getElementById('cuentaRegresiva');

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

  let mensaje = "¡Faltan {dias} dias, {horas} hs, {minutos} min y {segundos} seg!🎉 🎂🥳";

  countdownElement.innerHTML = mensaje.replace("{dias}", days).replace("{horas}", hours).replace("{minutos}", minutes).replace("{segundos}", seconds);

  setTimeout(countdown, 1000);
}

function compartir() {
  const url = window.location.href;
  const mensaje = encodeURIComponent(`¡No te pierdas mi fiesta de cumpleaños en Natatotio UP!, ingresá acá: ${url}`);
  window.open(`https://wa.me/?text=${mensaje}`);
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
});
