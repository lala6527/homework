import{Link} from"react-router-dom";
import style from "./header.module.scss";

export const Header =()=>{
    return (
        <header className={style.header}>
            <div className={style.brand}>
              <p>LULU</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                <a href="https://github.com/bluetch/frontend-course/homework-LUlu" target="_blank" rel="noreferrer">GitHub</a>
            </li>
                </ul>
            </nav>
        </header>
    );
}