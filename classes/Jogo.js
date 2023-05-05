export class Jogo {
  constructor(timeUm, timeDois) {
    this.timeUm = timeUm;
    this.timeDois = timeDois;
  }

  toArray() {
    return [this.timeUm, this, this.timeDois];
  }
}
