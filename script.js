import { Time } from "./classes/Time.js";
import { Campeonato } from "./classes/Campeonato.js";

const textInput = document.querySelector("textarea");
const submitInput = document.querySelector("input");
let teamList = [];

submitInput.addEventListener("click", (event) => {
  event.preventDefault();

  const inputList = textInput.value.split("\n");
  const regEx = /\s*(?:;|$)\s*/;

  inputList.map((teams) => {
    const nameList = teams.split(regEx);
    let time = new Time(nameList[0], nameList[1]);
    teamList.push(time);
  });

  const c1 = new Campeonato(teamList);
  c1.setJogos();
  c1.printJogos();
  c1.setPontuacao();
  c1.printPontuacao();
});
