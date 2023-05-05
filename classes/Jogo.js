export class Jogo {
  //   constructor(timeUm, timeDois, rodada) {
  //     this.timeUm = timeUm;
  //     this.timeDois = timeDois;
  //     this.rodada = rodada;
  //   }

  constructor(timeUm, timeDois) {
    this.timeUm = timeUm;
    this.timeDois = timeDois;
  }

  toArray() {
    return [this.timeUm, this.timeDois];
  }
}
