window.onload = function () {
    window.scrollTo(0, 0); // Desplaza la página a la parte superior
  };
  document.addEventListener("DOMContentLoaded", (event) => {
    window.scrollTo(0, 0);
  });
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1); // Puede ajustar el tiempo si es necesario
  };
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.onload = function () {
    window.scrollTo(0, 0);
  };
  function scrollToLocation() {
    const locationElement = document.getElementById("location");
    const yOffset = -80; // Ajusta este valor para cambiar la cantidad de desplazamiento hacia arriba
    const y =
      locationElement.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
  function scrollToConfirm() {
    const locationElement = document.getElementById("confirm");
    const yOffset = -80; // Ajusta este valor para cambiar la cantidad de desplazamiento hacia arriba
    const y =
      locationElement.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
  function scrollToGift() {
    const locationElement = document.getElementById("regalos");
    const yOffset = -200; // Ajusta este valor para cambiar la cantidad de desplazamiento hacia arriba
    const y =
      locationElement.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

function validarClave() {
    var clave = document.getElementById("clave").value;
    fetch('https://tu-api-gateway-url', {
        method: 'POST',
        body: JSON.stringify({ clave: clave }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("mensaje").textContent = data.mensaje;
    })
    .catch(error => console.error('Error:', error));
  }