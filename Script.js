const textoLoco = document.getElementById('texto-loco');
const texto = textoLoco.textContent;
textoLoco.innerHTML = ''; // Limpia el contenido original

for (let i = 0; i < texto.length; i++) {
  const h1 = document.createElement('h1');
  h1.textContent = texto[i];
  textoLoco.appendChild(h1);
}