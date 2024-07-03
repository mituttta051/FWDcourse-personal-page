import '../App.css'

export default function Programming() {
    return (
        <div className="hidden_content programming_content">
            <div className="text-caption">
                <h2 className="title">Public repositories</h2>
                <ul className="list_projects">
                    <li className="projects"><a href="https://github.com/mituttta051/Web-page"
                                                className="projects_link" target="_blank">
                        <span className="projects_text">USE preparation page 2022</span>
                    </a></li>
                    <li className="projects"><a href="https://github.com/mituttta051/JAVAIU"
                                                className="projects_link">
                        <span className="projects_text ">Java exercises 2023</span>
                    </a></li>
                    <li className="projects"><a
                        href="https://github.com/mituttta051/SSAD-Mitiutneva-Anastasia-DSAI-04"
                        className="projects_link" target="_blank">
                        <span className="projects_text">C++ exercises 2024</span>
                    </a></li>
                    <li className="projects"><a href="https://github.com/mituttta051/FWDcourse-personal-page"
                                                className="projects_link" target="_blank">
                        <span className="projects_text">Frontend summer project 2024</span>
                    </a></li>
                </ul>
            </div>
        </div>
    )
}