import '../App.css'
import {usePathname} from "next/navigation";
import Link from "next/link";

interface MenuProps {
    items: {
        title: string;
        link: string;
    }[]
}

export default function Menu(props: MenuProps) {
    const pathname = usePathname();
    return (
        <div className="default">
            <div className="menu">
                <nav className="menu_nav">
                    {props.items.map((item, index) => {
                        return <Link key={index} className={"menu_item " + (pathname === item.link ? "underline" : "")}
                                     href={item.link}
                        >{item.title}</Link>
                    })}
                </nav>
            </div>
        </div>
    )
}