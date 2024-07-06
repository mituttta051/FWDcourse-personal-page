'use client'

import Programming from "../../components/programming";
import Menu from "../../components/menu";

export default function Page() {
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
            <Programming/>
        </>
    )
}