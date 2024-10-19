const questions = [
  "I feel overwhelmingly sad at times",
  "I have trouble sleeping",
  "I experience sudden mood swings",
  "I feel anxious in social situations",
  "I have difficulty concentrating",
  "I feel hopeless about the future",
  "I have low self-esteem",
  "I experience physical symptoms of stress",
  "I have thoughts of self-harm",
  "I find it hard to enjoy things I used to like",
  "I feel isolated from others",
  "I have trouble making decisions",
];

const options = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];
let currentPage = 0;
const questionsPerPage = 3;
const errorText = document.querySelector(".error-text");

function renderQuestions() {
  const container = document.getElementById("questionContainer");
  container.innerHTML = "";
  const startIdx = currentPage * questionsPerPage;
  const endIdx = startIdx + questionsPerPage;

  for (let i = startIdx; i < endIdx && i < questions.length; i++) {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerHTML = `
            <p class = "question">Question ${i + 1}: ${questions[i]}</p>
            <div class="options">
                ${options
                  .map(
                    (option, index) => `
                    <label class = "choice">
                        <input type="radio" name="q${i}" value="${index}" required>
                        ${option}
                    </label>
                `
                  )
                  .join("")}
            </div>
        `;
    container.appendChild(questionDiv);
  }
  updateButtons();
  updateProgressBar();
}

function updateButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.disabled = currentPage === 0;

  if (currentPage === Math.ceil(questions.length / questionsPerPage) - 1) {
    nextBtn.textContent = "Submit";
  } else {
    nextBtn.textContent = "Next";
  }
}

function updateProgressBar() {
  const progress =
    ((currentPage + 1) / Math.ceil(questions.length / questionsPerPage)) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

function navigate(direction) {
  if (direction === 1 && !validateCurrentPage()) {
    errorText.classList.add("error-active");

    return;
  }

  currentPage += direction;

  errorText.classList.remove("error-active");
  if (currentPage < 0) currentPage = 0;
  if (currentPage >= Math.ceil(questions.length / questionsPerPage)) {
    submitForm();
    return;
  }
  renderQuestions();
}

function validateCurrentPage() {
  const startIdx = currentPage * questionsPerPage;
  const endIdx = startIdx + questionsPerPage;
  for (let i = startIdx; i < endIdx && i < questions.length; i++) {
    if (!document.querySelector(`input[name="q${i}"]:checked`)) {
      return false;
    }
  }
  return true;
}

function submitForm() {
  errorText.classList.remove("error-active");
  alert("Form submitted successfully!");
  // Here you would typically send the form data to a server
  // For this example, we'll just reset the form

  currentPage = 0;
  renderQuestions();
}

// Event listeners for navigation buttons
document
  .getElementById("prevBtn")
  .addEventListener("click", () => navigate(-1));
document.getElementById("nextBtn").addEventListener("click", () => navigate(1));

// Initial render
renderQuestions();
