'use client'
import { Helmet } from 'react-helmet';
import {formatDistanceToNow} from "date-fns";
import {useEffect, useState} from "react";
import Comic from "../../api/response/comic-response";
import Menu from "../../components/menu";
import ComicService from "../../api/service/comic-service";

export default function Page() {
    const [comic, setComic] = useState<Comic | null>(null);
    useEffect(() => {
        ComicService.getComic("a.mitiutneva@innopolis.university")
            .then((data) => setComic(data as Comic));

    }, [])
    return (
        <>
            <Helmet>
                <meta name="description" content="popular unique anecdote for physists" />
            </Helmet>
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