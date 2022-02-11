const Celula = require('./Celula');

module.exports = class Tablero {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
    this.matriz = this.fillTablero();
    this.establecerPrimeraGeneracion(5);
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  fillTablero() {
    const matriz = new Array(this.ancho)
      .fill('.')
      .map(() => new Array(this.alto).fill('.'));

    for (let i = 0; i < this.ancho; i++) {
      for (let j = 0; j < this.alto; j++) {
        matriz[i][j] = new Celula(i, j);
      }
    }
    return matriz;
  }

  establecerPrimeraGeneracion(numCelulas) {
    let contador = 0;
    do {
      let x = this.random(0, this.ancho - 1);
      let y = this.random(0, this.alto - 1);
      if (this.matriz[x][y].estado == 0) {
        this.matriz[x][y].setEstado(1);
        contador++;
      }
    } while (contador < numCelulas);
  }

    imprimirTablero() {
      let matrizTexto = '';
      for (let x = 0; x < this.ancho; x++) {
        for (let y = 0; y < this.alto; y++) {
            matrizTexto += this.matriz[x][y].estado == 1 ? '* ' : '- ';
        }
        matrizTexto += '\n';
        
      }
      return matrizTexto;  
        
    }
}