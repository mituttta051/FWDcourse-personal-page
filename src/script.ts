import Comic from "./api/response/comic-response";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

document.addEventListener("DOMContentLoaded", function() {
    const togglePersonal = document.getElementById("toggle_personal") as HTMLElement;
    const toggleProgramming = document.getElementById("toggle_programming") as HTMLElement;
    const toggleMeme = document.getElementById("toggle_meme") as HTMLElement;
    const personalContent = document.querySelector(".personal_content") as HTMLElement;
    const programmingContent = document.querySelector(".programming_content") as HTMLElement;


    togglePersonal.addEventListener("click", function() {
        if (personalContent.style.display === "none") {
            personalContent.style.display = "flex";
            programmingContent.style.display = "none";

            togglePersonal.style.textDecoration = "underline";
            toggleProgramming.style.textDecoration = "none";
            toggleMeme.style.textDecoration = "none";

        } else {
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
function fetchXKCDComic(email: string) {
    const url = new URL('https://fwd.innopolis.university/api/hw2');
    const params = new URLSearchParams({email});
    url.search = params.toString();
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return response.json() as Promise<string>;
        })
        .then(data => {
            handleComicId(data);

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function handleComicId(id: string) {
    const url = new URL('https://fwd.innopolis.university/api/comic');
    const params = new URLSearchParams({ id });
    url.search = params.toString();
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return response.json() as Promise<Comic>;
        })
        .then(data => {
            displayContent(data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        })
}

function displayContent(data: Comic) {
    const title = document.getElementById('meme_title') as HTMLElement;
    const img = document.getElementById('img_container') as HTMLElement;
    const date = document.getElementById('meme_date') as HTMLElement;
    title.innerHTML = `${data.safe_title}`;
    img.innerHTML = `<img src="${data.img}" alt="${data.alt}">`;
    const comicDate = dayjs(new Date(data.year, data.month-1, data.day));
    const timeSinceRelease = comicDate.fromNow();
    date.innerHTML = `Date Uploaded: ${timeSinceRelease}`;
}

