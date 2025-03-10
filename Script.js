const frases = [
  "Desarrolladora Web Full Stack ✨",
  "Tibú Norte de Santander 💻",
  "Trabajando por un mejor futuro 😎",
];

const elemento = document.querySelector(".neon-text");
if (elemento) {
  let indexFrase = 0;
  let indexLetra = 0;
  let escribiendo = true;

  function escribirTexto() {
      if (escribiendo) {
          if (indexLetra < frases[indexFrase].length) {
              elemento.innerHTML += frases[indexFrase].charAt(indexLetra);
              indexLetra++;
              setTimeout(escribirTexto, 50);
          } else {
              escribiendo = false;
              setTimeout(borrarTexto, 2000);
          }
      }
  }

  function borrarTexto() {
      if (!escribiendo) {
          if (indexLetra > 0) {
              elemento.innerHTML = frases[indexFrase].substring(0, indexLetra - 1);
              indexLetra--;
              setTimeout(borrarTexto, 30);
          } else {
              escribiendo = true;
              indexFrase = (indexFrase + 1) % frases.length;
              setTimeout(escribirTexto, 500);
          }
      }
  }

  escribirTexto();
}
