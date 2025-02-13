document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
            const faq = this.closest('.faq'); 
            const answer = faq.querySelector(".faq-text");
            const icon = faq.querySelector(".toggle-icon");

            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "+"; 
            } else {
                answer.style.display = "block";
                icon.textContent = "-"; 
            }
        });
    });
});
