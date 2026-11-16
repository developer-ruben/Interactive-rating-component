const numbers = document.getElementById("numbers");
const ratingComponent = document.getElementById("rating-component");
const thanksComponent = document.getElementById("thanks-component");
const submitButton = document.getElementById("submit-button");
const thanksScore = document.getElementById("thanks-score");

let selectedNum = null;
let activeElement = null;

const MESSAGE_DELAY = 3000;
const TRANSITION_DELAY = 400;

if (
  !numbers ||
  !submitButton ||
  !ratingComponent ||
  !thanksComponent ||
  !thanksScore
) {
  console.error("Missing required DOM elements");
}

numbers.addEventListener("click", (e) => {
  if (e.target.classList.contains("rating-component__number")) {
    if (activeElement) {
      activeElement.classList.remove("rating-component__number--active");
      activeElement.ariaPressed = "false";
    }

    e.target.classList.add("rating-component__number--active");
    e.target.classList.ariaPressed = "true";
    activeElement = e.target;

    selectedNum = Number(e.target.dataset.id);
    submitButton.textContent = "Submit";
  }
});

submitButton.addEventListener("click", () => {
  if (!selectedNum) {
    submitButton.textContent = "Please select a number!";
    setTimeout(() => {
      submitButton.textContent = "Submit";
    }, MESSAGE_DELAY);
    return;
  }

  ratingComponent.classList.add("rating-component--hide");
  ratingComponent.ariaHidden = "true";

  thanksScore.textContent = selectedNum;
  setTimeout(() => {
    thanksComponent.classList.add("thanks-component--show");
    thanksComponent.ariaHidden = "false";
  }, TRANSITION_DELAY);
});
