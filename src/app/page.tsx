'use client'

import Menu from "../components/menu";
import AboutMe from "../components/about-me";
import {Helmet} from "react-helmet";

export default function Personal() {
    return (
        <>
            <Helmet>
                <meta name="description" content="Author biography"/>
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
            <AboutMe
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
                title={"About me"}/>
        </>
    )
}