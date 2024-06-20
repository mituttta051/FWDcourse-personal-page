document.addEventListener("DOMContentLoaded", function() {
    const togglePersonal = document.getElementById("toggle_personal");
    const toggleProgramming = document.getElementById("toggle_programming");
    const toggleMeme = document.getElementById("toggle_meme");
    const personalContent = document.querySelector(".personal_content");
    const programmingContent = document.querySelector(".programming_content");


    togglePersonal.addEventListener("click", function() {
        if (personalContent.style.display === "none") {
            personalContent.style.display = "flex";
            programmingContent.style.display = "none";

            togglePersonal.style.textDecoration = "underline";
            toggleProgramming.style.textDecoration = "none";
            toggleMeme.style.textDecoration = "none";

        } else {
            console.log(personalContent.style.display)
            personalContent.style.display = "none";
            togglePersonal.style.textDecoration = "none";
        }
    });

    toggleProgramming.addEventListener("click", function() {
        if (programmingContent.style.display === "none") {
            programmingContent.style.display = "flex";
            personalContent.style.display = "none";

            toggleProgramming.style.textDecoration = "underline";
            togglePersonal.style.textDecoration = "none";
            toggleMeme.style.textDecoration = "none";

        } else {
            programmingContent.style.display = "none";
            toggleProgramming.style.textDecoration = "none";
        }
    });

    toggleMeme.addEventListener("click", function() {
        if (toggleMeme.style.textDecoration === "none") {
            toggleProgramming.style.textDecoration = "none";
            togglePersonal.style.textDecoration = "none";
            toggleMeme.style.textDecoration = "underline";
        } else {
            toggleMeme.style.textDecoration = "none";
        }
    });
});
fetchXKCDComic("a.mitiutneva@innopolis.university");
function fetchXKCDComic(email) {
    const url = new URL('https://fwd.innopolis.university/api/hw2');
    const params = new URLSearchParams({email});
    url.search = params;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const id = data;
            console.log('Comic Identifier:', id);
            handleComicId(id);

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function handleComicId(id) {
    const url = new URL('https://fwd.innopolis.university/api/comic');
    const params = new URLSearchParams({ id });
    url.search = params.toString();
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayContent(data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        })
}

function displayContent(data) {
    const title = document.getElementById('meme_title');
    const img = document.getElementById('img_container');
    const date = document.getElementById('meme_date');
    title.innerHTML = `${data.safe_title}`;
    img.innerHTML = `<img src="${data.img}" alt="${data.alt}">`;
    date.innerHTML = `Date Uploaded: ${new Date(data.day, data.month, data.year).toLocaleDateString()}`;
}

