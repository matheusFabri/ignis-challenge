const textInput = document.querySelector("textarea");
const submitInput = document.querySelector("input");

submitInput.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(textInput.value);
});
