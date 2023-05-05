import { Time } from "./Time.js";

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

  console.log(teamList);
});
