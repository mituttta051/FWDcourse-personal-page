'use client'
import { Helmet } from 'react-helmet';
import Programming from "../../components/programming";
import Menu from "../../components/menu";

export default function Page() {
    return (
        <>
            <Helmet>
                <meta name="description" content="Main GitHub repositories, activities of author"/>
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
            <Programming/>
        </>
    )
}