import { Jogo } from "./Jogo.js";

export class Campeonato {
  constructor(times) {
    this.times = times;
    this.rodada = 0;
    this.turno = true;
    this.jogos = [];
  }
}
