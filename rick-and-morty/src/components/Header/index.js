import './header.css';
import {IoSunny, IoMoonOutline} from "react-icons/io5";

//COMPONENTE
export default function Header(){
    return(
        <div className="header__container">
            <h1>The Rick and Morty</h1>
            <div>
                <IoSunny/>
                <IoMoonOutline/>
            </div>
        </div>
    )
}