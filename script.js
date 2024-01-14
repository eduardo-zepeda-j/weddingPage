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
  function scrollToItinerary() {
    const locationElement = document.getElementById("itinerary");
    const yOffset = -100; // Ajusta este valor para cambiar la cantidad de desplazamiento hacia arriba
    const y =
      locationElement.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

// Diccionario de hashes SHA256 y enlaces
var enlacesPorHash = {
  "205d7230fbac9a8e36ebec044d1ecfa2e708cffb7422195c09129e1e6e0737d7": "https://docs.google.com/forms/d/e/1FAIpQLSfnAJMN0AX6eD8dx96MR-PMxEa06K5quVhQnEwv6x4x5e7Mtg/viewform?embedded=true",
  "4af10fc0f6e9f6c4ca13638829d4b7978633b6263686db3a23c5f556e879f5ee": "https://docs.google.com/forms/d/e/1FAIpQLSctUYFRaJHm01c_cqasbD1H9-hkKi7JWClm3wdNJOUuAId-Sw/viewform?embedded=true",
  "d18fafc092981d4d8d58e2534314599b2cf930776e34c9995b6ff115e6146173": "https://docs.google.com/forms/d/e/1FAIpQLSebdouJzP19QHYY4mfsmGZ58NIPcravwmCLd-UOMTPMdLTJaQ/viewform?embedded=true",
  "cbf1ec9838da19c79608e0646e8d1c38f5b18536a1c6e153347d827e2a5c1f6f": "https://docs.google.com/forms/d/e/1FAIpQLSdQtROZZyH-axI9aOGd7HKxpoLGwA0myoBWNSJRUfRrcAkNAQ/viewform?embedded=true",
  "2e2f1f20ac0111d8a782d9f4256c467930fe4dfb10a508c118e232e5c6fc3005": "https://docs.google.com/forms/d/e/1FAIpQLSfZ6CxGFfsUIjs01smp34uoj-0Izavl7fUgbmQbTioUuDmGyA/viewform?embedded=true",
  "0ca6aa976a57e9f9157ea9a3d844f97bb9488fdce12cc8c4c30d2f5d1d3acfab": "https://docs.google.com/forms/d/e/1FAIpQLSdK5iwEcjWvv-jE3kpwBRoaHv-PUiwDbDTpgaXfbujA7f_Mug/viewform?embedded=true",
  "f5679b79a1ba672377f8ba8be52e72ac9ea1a04dae786857543bbc6444d414e6": "https://docs.google.com/forms/d/e/1FAIpQLSfDY8FPhEpQU3HFQF9dhjpWA79OZE35cumEelJmTeiyLR9pgA/viewform?embedded=true",
  "6822feffce00ef211b05e166e156dc7fba76a810a1abfb82e6c4a445130fba23": "https://docs.google.com/forms/d/e/1FAIpQLSdgl_q-ntdrSUZugNJvgLFBkH2-GdXvmYX_TprjoVL6tqY4qg/viewform?embedded=true",
  "ef36c1c8cc2f4d3a7cbba9854dfc902642b8007d7043c951ad3d188294d8ae3c": "https://docs.google.com/forms/d/e/1FAIpQLSdEtWOUm0sKFUGcSr2FQ9hgdBKrFKvW7ouO9t_PH9nxIjuKNw/viewform?embedded=true",
  "37c1df0a295cfcf5c82d15081501d6419833a7b187afaea8f8e45111d5ea94cb": "https://docs.google.com/forms/d/e/1FAIpQLScj6L6xRhjkX_y15S11sNTeARldtijQTPE0yj6BfaZMZ4V0vQ/viewform?embedded=true",
  "a62d80d1fe906407f3e9af036059d64c6c54bade7456aec0df6d48572be7e272": "https://docs.google.com/forms/d/e/1FAIpQLSdcerVEmfskXCYXVZua9hV8IKxRHQ0gzB-Jxy1jdHEuOPjN2Q/viewform?embedded=true",
  "190f8bb417f02bbad51919517eb97691d6bbaad06239ce053ed289ac47237b9c": "https://docs.google.com/forms/d/e/1FAIpQLSdH5NCMuN_vi1nGuLpHkmdvjBem0bTHVll60jV-jNxE6gVpbA/viewform?embedded=true",
  "6bbfaa30b2af24f43ca32ef7b3dd81400f78898f14fc070baadd1bb33492fc10": "https://docs.google.com/forms/d/e/1FAIpQLSePjh3ylM1iG7NPDhYnrIQUvUBoC903vhfwlUfLhMmnAdeATQ/viewform?embedded=true",
  "0dc58bfeea2a72982f4f7ac5d8b5736adf0c909fe3c2b87514cc36b642c2f317": "https://docs.google.com/forms/d/e/1FAIpQLScbOqe_3jGYAGxD6I88-1CvM9238rGCivW7TPPfyx576tL5rQ/viewform?embedded=true",
  "a756da81ecdc721de762a22f3a166e9b2f1fd361c24daab991ce1150b958282e": "https://docs.google.com/forms/d/e/1FAIpQLSdrso0NNU_hS3BsCUbuy0rYDtO4tqoIQ-rJ1Rr4kuH5TWRecQ/viewform?embedded=true",
  "c74ba220a752b44aff905543813ec1dadfa8dd8a39d2782b9cbfcd140fe595d5": "https://docs.google.com/forms/d/e/1FAIpQLSc1Lyheyy3vwm4uuzIdr2UJ4EQXWaziNfH9nyyDQHrdKBpWng/viewform?embedded=true",
  "edc49768e873bb098949d1884e8e27ee17470f2cbc11ced71b4e9fb2081f351d": "https://docs.google.com/forms/d/e/1FAIpQLSf-uIq1hHF1yBwkJ1Crmj0drdQMVjQPW-dteKKWGKz2hmELLA/viewform?embedded=true",
  "2e97e859d4f0f0fb336215e35f6243f3de828a4252d2b89b00b5a8069999c21a": "https://docs.google.com/forms/d/e/1FAIpQLSdFQzKHrxtQlp0Gc6vZAXdre-w1UFhuC-Cyyz0hzldgb-Lxkg/viewform?embedded=true",
  "d848bd295d5088b8f0a2b8281102ee82b596d6eb391d7f1eaee4caf30a9a71be": "https://docs.google.com/forms/d/e/1FAIpQLSen6k6w_y3oDaWfCvK9TnhJYJm8ACk0fDiYagAv7v6VV1DiUA/viewform?embedded=true",
  "834d98a418450aa6d05df5462e3547fcddb60336245a81ac453c6ec6d1ff78c6": "https://docs.google.com/forms/d/e/1FAIpQLSe9x7LdfwjpSsuQvlIhVGf5oXDnzzc0kTYxnau9ggYZbW5SnA/viewform?embedded=true",
  "dbfe63923928870a008d874cd4ceb58e138d035a1beea9950308c0604d053147": "https://docs.google.com/forms/d/e/1FAIpQLSc_q9L31fAY-W-RUjCKMorZcYZwAfPorhvtgLtY_kjPO3OBiA/viewform?embedded=true",
  "822368f0fac2abac1f6d36ad044c65b332a59922ceeb7c32d24a6a98ea32f161": "https://docs.google.com/forms/d/e/1FAIpQLSdhpLtsZd3cuW0Zv5HNw38VvcbJD_ZVCcjaopUZ_dg0C43ZNA/viewform?embedded=true",
  "539e3ae69b61e230ade09971f6ba0a46ac40270b3fd60a812826f61beb9a6314": "https://docs.google.com/forms/d/e/1FAIpQLScxv0fd0qcMNu8xM6OtPUxwvpyuKvWjJqNE2w1-PZv_TPKyoA/viewform?embedded=true",
  "df2f4175701f24bcf3128bdbe2a305ffb6cd88603a661def7b903e1d1b2a9ab2": "https://docs.google.com/forms/d/e/1FAIpQLSebw49g1etAcKqyTazjYfq9qYxd42ytro60D38H5CpxQrzQdw/viewform?embedded=true",
  "832dbe077810cf124ecb97a4030282e5aad8d043f5dfad9936f325941c0e873a": "https://docs.google.com/forms/d/e/1FAIpQLScRRTzySy7onwgfghuW962cI1t_0NORWIWgIMG_oJGdWR9xSQ/viewform?embedded=true",
  "aed21510817326a013b20c57a907d0a3706b8047be5550783ac904816487e020": "https://docs.google.com/forms/d/e/1FAIpQLSc5nMIeGcT9au4yHrgQhjba1W_qxilFk0Q4pdr1PqVfNa_mhw/viewform?embedded=true",
  "8fb3cef867276b3b6932c3d7b4a586d572c23dee64acdd6c06ba8de961a8493e": "https://docs.google.com/forms/d/e/1FAIpQLSfoqJjqG6wW-_Z3CDmH8kWmFAxJOA1AWEc1diHydAmYyAyzTw/viewform?embedded=true",
  "b91faff2eab034dc2e0971d472e577539079022f9cf8715bcd9c3d2d52ea17a9": "https://docs.google.com/forms/d/e/1FAIpQLSfxWHtDLRVGGivRIjEBlWj84aPeY0g5U9ufA2JyyJZvakulCg/viewform?embedded=true",
  "876196dca29770c9a73546eda124ee6e874cbff509e9fda4583b0e17d1a3c00c": "https://docs.google.com/forms/d/e/1FAIpQLScaf4yzyQN7XPk0k3jzlJQka9O1dPtwC8idJA1N_oPy6u347w/viewform?embedded=true",
  "82a9b1f9cfa662edcd7cc82e2093d2c3420d8db08050ec9b7a49fc1976c1e587": "https://docs.google.com/forms/d/e/1FAIpQLSdevYN_rfTm9rKwod02ERikv8IYeIaSrao8EyQbYdQPGGuVng/viewform?embedded=true",
  "241bebd1dbfad5fc7b010ce7ff0c29c59dffff92709c329632a32f118e46a8b6": "https://docs.google.com/forms/d/e/1FAIpQLScfATYYUWEfwfRVr-CpBUNAcPKm5tR60YlGdXTIchtWyGbuXw/viewform?embedded=true",
"523b8397005dd5858420fe698d608f026541f953e6e715e3d38d15b790763107": "https://docs.google.com/forms/d/e/1FAIpQLSc27Ps0eRFmkPdJ6VQ_aDUgIiH8cvsL9X5zEAYkhPsqZusgjQ/viewform?embedded=true",
"18e31de06b31938abc1eae4f5bb7b56e38bb7bc975ecaca9dd0dd2fd022a38a2": "https://docs.google.com/forms/d/e/1FAIpQLSdcuHa7VcSGCQheNHeZsBA9APTz8tUiRuAQzgMqJ6Qr9Y7Hvw/viewform?embedded=true",
"914c1b634d7b24eace4d6672f798176e7fbabdd063a0bff09819f4d62ec2718b": "https://docs.google.com/forms/d/e/1FAIpQLSd3fpHspEpzHDaXtmwgmWeafkxSMYWKVxsO300_lJxzm8pWHg/viewform?embedded=true",
"320abc4a4cfeb7edf659ababc932f6e496989016d7b4148e5b2f730967823d92": "https://docs.google.com/forms/d/e/1FAIpQLScm6F9fSiTymn0qTpjYnBhGg_49AsC-Vm7MUKD984PIE19pDw/viewform?embedded=true",
"d6c21b948958417ca98b682a573eb8aa1084b292d32f760f253ef53da13e5589":"https://docs.google.com/forms/d/e/1FAIpQLSdaxkZJ0qIQugVjKZyoiz0XrDdWx6CrxxWm0d9BiwaHG4iOGw/viewform?embedded=true",
};


// Función para generar SHA256
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Función para cambiar el enlace
async function cambiarEnlace() {
  var clave = document.getElementById("clave").value.toUpperCase();
  var hashClave = await sha256(clave);

  if (enlacesPorHash.hasOwnProperty(hashClave)) {
      document.getElementById("confirm").innerHTML = 
          `<iframe src="${enlacesPorHash[hashClave]}" width="100%" height="680px" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`;
  } else {
      document.getElementById("mensaje").textContent = "Clave incorrecta";
  }
}
