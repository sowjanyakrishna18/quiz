const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    // Add more questions as needed
];

let userAnswers = [];

function startQuiz() {
    const questionContainer = document.getElementById("question-container");
    questions.forEach((q, index) => {
        const options = q.options.map((option, i) => {
            return `<input type="radio" name="q${index}" value="${option}">${option}<br>`;
        }).join('');
        questionContainer.innerHTML += `<div>${index + 1}. ${q.question}<br>${options}</div>`;
    });
}

function submitQuiz() {
    userAnswers = [];
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        userAnswers.push({
            question: q.question,
            answer: selectedOption ? selectedOption.value : "Not answered"
        });
    });
    alert("Quiz submitted successfully!");
}

function reviewQuiz() {
    let reviewText = "Review your answers:\n";
    userAnswers.forEach((ua, index) => {
        reviewText += `${index + 1}. ${ua.question}\nYour Answer: ${ua.answer}\n\n`;
    });
    alert(reviewText);
}

startQuiz();