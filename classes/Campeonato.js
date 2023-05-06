import { Jogo } from "./Jogo.js";

export class Campeonato {
  constructor(times) {
    this.times = times;
    this.rodada = 0;
    //this.turno = true;
    this.jogos = [];
  }

  setJogos() {
    for (let i = 0; i < this.times.length; i++) {
      //this.rodada = i + 1;
      for (let j = i + 1; j < this.times.length; j++) {
        let jogo = new Jogo(this.times[i], this.times[j]);
        this.jogos.push(jogo.toArray());
        //this.rodada++;
      }
    }
  }

  setPontuacao(){
    this.jogos.forEach((jogo)=>{
      let result;

        result = Math.floor(Math.random()*4);
        if(result == 2){
          result+=1;
        }

      jogo[0].pontuacao += result;
      if(result == 3){
        jogo[1].pontuacao += 0;
      } else if(result == 1){
        jogo[1].pontuacao += 1;
      } else {
        jogo[1].pontuacao += 3;
      }
    });
  }

  printPontuacao(){
    this.times.forEach((time)=>{
      console.log(`${time.pontuacao} - ${time.nome}`);
    })
  }


  getJogos() {
    return this.jogos;
  }

  printJogos() {
    const div = document.createElement("div");
    //Turno
    div.innerHTML += "<h4>Turno:</h4>";
    this.jogos.forEach((jogo) => {
      div.innerHTML += `${jogo[0].nome} vs ${jogo[1].nome} - ${jogo[0].cidade}<br>`;
    });

    //Returno
    const jogosReturno = this.jogos.map((jogo) => {
      return jogo.reverse();
    });
    div.innerHTML += "<h4>Returno:</h4>";
    jogosReturno.forEach((jogo) => {
      div.innerHTML += `${jogo[0].nome} vs ${jogo[1].nome} - ${jogo[0].cidade}<br>`;
    });
    document.querySelector(".form").append(div);
  }
}
