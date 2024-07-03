import './App.css'
import Header from "./components/header.tsx";
import Menu from "./components/menu.tsx";
import AboutMe from "./components/about-me.tsx";
import Programming from "./components/programming.tsx";
import {useEffect, useState} from "react";
import Comic from "./api/response/comic-response.ts";
import {formatDistanceToNow} from "date-fns";

function App() {
    const [toggleContent, setToggleContent] = useState(true);
    const [mainPage, setMainPage] = useState(true);

    const [comic, setComic] = useState<Comic | null>(null);

    useEffect(() => {
        fetchXKCDComic("a.mitiutneva@innopolis.university");

    }, [])
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
                setComic(data)
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            })
    }
    return (
        <>
            {mainPage ? (
                <>
                    <Header
                        name={"Anastasia Mitiutneva"}
                        quote={"Innopolis student who dreams of connecting her life with IT and building a successful career in software engineering and artificial intelligence"}
                        socials={[
                            {
                                href: "https://t.me/Mituttta",
                                className: "social_icon_img social_icon_img_telegram",
                                icon: "icons/TelegramIcon.svg",
                                alt: "Telegram",
                                id: "tg-link"
                            },
                            {
                                href: "https://github.com/mituttta051",
                                className: "social_icon_img social_icon_img_git",
                                icon: "icons/GithubIcon.svg",
                                alt: "GitHub",
                                id: "gh-link"
                            },
                            {
                                href: "mailto:a.mitiutneva@innopolis.university",
                                className: "social_icon_img social_icon_img_email",
                                icon: "icons/EmailIcon.svg",
                                alt: "Email",
                                id: "email"
                            }
                        ]}
                    />
                    <Menu items={[
                        {
                            title: "Personal",
                            onClick: () => {
                                setToggleContent(true);
                            }
                        },
                        {
                            title: "Programming",
                            onClick: () => {
                                setToggleContent(false);
                            }
                        },
                        {
                            title: "Meme",
                            onClick: () => {
                                setMainPage(false);
                            }
                        }

                    ]}/>
                    {toggleContent ? <AboutMe
                        img={"images/NastyaSnow.jpg"}
                        paragraphs={[
                            <>I was born in the cold city of Khabarovsk and from childhood I was a
                                smart girl.
                                When I was 7 years old, my family moved to warm Krasnodar, where I lived for 11
                                years.</>,
                            <>In the 7th grade, my mother sent me to a <b>programming club</b> in
                                HTML, CSS,
                                JS (where I did not want to go, because I thought that programmers were <i>boring
                                    nerds</i>).
                                For better or worse, I enjoyed making websites. And a seed settled in me - perhaps I
                                want to
                                become a programmer.</>,
                            <>In the 8th grade, I entered the gymnasium, where I met an incredible
                                teacher,
                                Ivan Alekseevich. He completely fell in love with this business and taught me <b>my
                                    first
                                    language,</b> Python. In 10th grade, I learned about <b>Innopolis
                                    University,</b> but I did
                                not even dream of going there, I was sure that I could not.</>,
                            <>Having successfully passed the Unified State Exam and received a grant
                                for
                                studying, I entered Innopolis on a budget! <b> This is where I begin my journey towards
                                    my dream
                                    - to become a successful programmer </b></>
                        ]}
                        title={"About me"}
                    /> : <Programming/>}
                </>
            ) : (comic ? (
                <>
                    <div id="comic_container">
                        <h2 className="title" id="meme_title">{comic.safe_title}</h2>
                        <img id="img_container" src={comic.img} alt={comic.alt}></img>
                        <h2 id="meme_date">{formatDistanceToNow(new Date(comic.year, comic.month - 1, comic.day))}</h2>
                    </div>
                </>
            ) : null)}
        </>
    );
}

export default App

