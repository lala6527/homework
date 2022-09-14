import{Link} from"react-router-dom";
import style from "./header.module.scss";

export const Header =()=>{
    return (
        <header className={style.header}>
            <div className={style.brand}>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}