import '../App.css';

interface HeaderProps {
    name: string;
    quote: string;
    socials: {
        href: string;
        className: string;
        icon: string;
        alt: string;
        id: string;
    }[];
}
export default function Header(props: HeaderProps) {
    return (
        <div className="default">
            <header className="header">
                <h1 className="header-name">{props.name}</h1>
                <div className="header-description">
                    <p>{props.quote}
                    </p>
                </div>

                <div className="header-socials">
                    <ul className="socials__btns">
                        {props.socials.map((item, index) => {
                            return <li className="social_btn" key={index}>
                                <a href={item.href} id={item.id} target="_blank">
                                    <img className={item.className}
                                         src={item.icon}
                                         alt={item.alt}/>
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
            </header>
        </div>
    )
}