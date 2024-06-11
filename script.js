document.addEventListener("DOMContentLoaded", function() {
    const togglePersonal = document.getElementById("toggle_personal");
    const toggleProgramming = document.getElementById("toggle_programming");
    const toggleTutoring = document.getElementById("toggle_tutoring");
    const personalContent = document.querySelector(".personal_content");
    const programmingContent = document.querySelector(".programming_content");
    const tutoringContent = document.querySelector(".tutoring_content");


    togglePersonal.addEventListener("click", function() {
        if (personalContent.style.display === "none") {
            personalContent.style.display = "flex";
            programmingContent.style.display = "none";
            tutoringContent.style.display = "none";

            togglePersonal.style.textDecoration = "underline";
            toggleProgramming.style.textDecoration = "none";
            toggleTutoring.style.textDecoration = "none";

        } else {
            console.log(personalContent.style.display)
            personalContent.style.display = "none";
            togglePersonal.style.textDecoration = "none";
        }
    });

    toggleProgramming.addEventListener("click", function() {
        if (programmingContent.style.display === "none") {
            programmingContent.style.display = "flex";
            tutoringContent.style.display = "none";
            personalContent.style.display = "none";

            toggleProgramming.style.textDecoration = "underline";
            togglePersonal.style.textDecoration = "none";
            toggleTutoring.style.textDecoration = "none";

        } else {
            programmingContent.style.display = "none";
            toggleProgramming.style.textDecoration = "none";
        }
    });

    toggleTutoring.addEventListener("click", function() {
        if (tutoringContent.style.display === "none") {
            tutoringContent.style.display = "flex";
            personalContent.style.display = "none";
            programmingContent.style.display = "none";

            toggleProgramming.style.textDecoration = "none";
            togglePersonal.style.textDecoration = "none";
            toggleTutoring.style.textDecoration = "underline";
        } else {
            tutoringContent.style.display = "none";
            toggleTutoring.style.textDecoration = "none";
        }
    });
});
