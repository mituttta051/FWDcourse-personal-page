import '../App.css'
import {useState} from "react";

interface MenuProps {
    items: {
        title: string;
        onClick: () => void;
    }[]

}
export default function Menu(props: MenuProps) {
    const [underline, setUnderline] = useState(0);
    return (
        <div className="default">
            <div className="menu">
                <nav className="menu_nav">
                    {props.items.map((item, index) => {
                        return <button className={"menu_item " + (underline === index ? "underline" : "")}
                                onClick={() => {
                                    item.onClick();
                                    setUnderline(index);
                                }

                                }>{item.title}</button>
                    })}
                </nav>
            </div>
        </div>
    )
}