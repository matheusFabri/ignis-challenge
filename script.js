const textInput = document.querySelector("textarea");
const submitInput = document.querySelector("input");

submitInput.addEventListener("click", (event) => {
  event.preventDefault();

  const inputList = textInput.value.split("\n");

  console.log(inputList);
});
