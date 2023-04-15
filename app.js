const contador = document.getElementById("tiempo");
const clicks = document.getElementById("clicks");
const clickAqui = document
  .getElementById("click-aqui")
  .addEventListener("click", papaClick);
const contadorClicks = document
  .getElementById("empezar")
  .addEventListener("click", papa);

let numclick = 0;
let numTiempo = 10;

function papaClick() {
  if (numTiempo < 10 && numTiempo > 0) {
    clicks.innerHTML = numclick;
    numclick++;
  }
}

function papa() {
  let almacen;
  const steven = setInterval(() => {
    contador.innerHTML = numTiempo;
    numTiempo--;
    if (numTiempo === -1) {
      clearInterval(steven);
      almacen = clicks.innerHTML / 10;
      numTiempo = 10;
      numclick = 0;
      alert(`Tu cantidad de clicks por segundo es: ${almacen}`);
    }
  }, 1000);
}
