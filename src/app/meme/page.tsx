'use client'

import {formatDistanceToNow} from "date-fns";
import {useEffect, useState} from "react";
import Comic from "../../api/response/comic-response";
import Menu from "../../components/menu";

export default function Page() {
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
        const params = new URLSearchParams({id});
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
            <Menu items={[
                {
                    title: "Personal",
                    link: "/"
                },
                {
                    title: "Programming",
                    link: "/programming"
                },
                {
                    title: "Meme",
                    link: "/meme"
                }

            ]}/>
            {comic && (
                <div id="comic_container">
                    <h2 className="title" id="meme_title">{comic.safe_title}</h2>
                    <img id="img_container" src={comic.img} alt={comic.alt}></img>
                    <h2 id="meme_date">{formatDistanceToNow(
                        new Date(
                            comic.year,
                            comic.month - 1,
                            comic.day))}</h2>
                </div>
            )}
        </>
    )
}