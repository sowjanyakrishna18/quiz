fetch('user-answers.json')
    .then(response => response.json())
    .then(data => displayReview(data));

function displayReview(userAnswers) {
    const reviewContainer = document.getElementById('review-container');
    const resultContainer = document.getElementById('result-container');

    userAnswers.forEach(userAnswer => {
        const reviewElement = document.createElement('div');
        reviewElement.innerHTML = `
            <p>${userAnswer.question}</p>
            <p>Your Answer: ${userAnswer.answer}</p>
        `;
        reviewContainer.appendChild(reviewElement);
    });

    // Assuming correct answers are available in another JSON file
    fetch('correct-answers.json')
        .then(response => response.json())
        .then(correctAnswers => {
            let correctCount = 0;

            userAnswers.forEach(userAnswer => {
                const correctAnswer = correctAnswers.find(answer => answer.question === userAnswer.question);

                if (correctAnswer && userAnswer.answer === correctAnswer.correctAnswer) {
                    correctCount++;
                }
            });

            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<p>Your Score: ${correctCount} out of ${userAnswers.length}</p>`;
            resultContainer.appendChild(resultElement);
        })
        .catch(error => {
            console.error('Error fetching correct answers:', error);
        });
}