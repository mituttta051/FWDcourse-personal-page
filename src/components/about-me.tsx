import '../App.css'

interface AboutMeProps {
    title: string;
    paragraphs: React.ReactNode[];
    img: string;
}

export default function AboutMe(props: AboutMeProps) {
    return (
        <div className="hidden_content personal_content">
            <img className="main_img" src={props.img} alt="Personal Photo"/>
            <div className="text_caption">
                <h2 className="title">{props.title}</h2>
                {props.paragraphs.map((item, index) => {
                    return <p className="info" key={index}>{item}</p>
                })}

            </div>
        </div>
    )
}