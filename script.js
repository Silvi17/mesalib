/* tarjetas */
document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const allAnswers = this.parentElement.querySelectorAll(".answer");

            allAnswers.forEach(ans => {
                if (ans !== answer) {
                    ans.style.display = "none";
                }
            });

            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });
    });
});