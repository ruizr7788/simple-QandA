// questions

const question3 = {
  "Do You Suppport Local Farmers?":
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
};
const question2 = {
  "Do You Use Organic Ingredients?":
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
};
const question1 = {
  "Flexible Panel Design, expand for explanation":
    "These panels come from an object in the JavaScript code. As more objects appear in forms of questions, Javascript will use 'insetAdjacentHTML' to create a new panel.",
};
const questions = [question1, question2, question3];

// container selector needed to be referenced at this point in the code
const container = document.querySelector(".container");

// add panels to html
const addPanel = function (questions) {
  questions.forEach(function (question, i, arr) {
    const html = `<div class="question_panel">
      <p>${Object.keys(question).join("")}</p>
      <span class="expand_button">+</span>
      <p class="information hidden">
        ${Object.values(question).join("")}
      </p>
    </div>`;
    container.insertAdjacentHTML("beforeend", html);
  });
};
addPanel(questions);

// selectors
const expandBtn = document.querySelectorAll(".expand_button");
const information = document.querySelector(".information");
const questionPanel = document.querySelectorAll(".question_panel");
// function

expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    closeActive();
    btn.parentElement.classList.add("active");
  });
});

function closeActive() {
  questionPanel.forEach((panel) => {
    panel.classList.remove("active");
  });
}
