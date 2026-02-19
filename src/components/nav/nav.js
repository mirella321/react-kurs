import { Link } from 'react-router-dom';
import './nav.css';

export function Nav() {

    const navLinks = [
        {
            path="/"
            name:"News"
            icon: "<i class="fa-solid fa-newspaper"></i>"
        }
    ];
const handleInput = (e) => {
    console.log("kliknięto: ", e.target.value);
};
{

    return(
        <nav>
            <span><i class="fa-brands fa-bitcoin"></i></span>
            <ul>
                <li>
                <Link to="/dashboard">   

<i class="fa-brands fa-dashcube"></i>
                    Dashboard
                    </Link> 
                </li>
                <li>
                    <Link to="/news">
                         <i class="fa-solid fa-newspaper"></i>
                         news
                     </Link>
            
                </li>
                <li>
                    <Link to="/users">
                    <i class="fa-solid fa-person"></i>
                    Users
                    </Link></li>
                    <li>
                        <input placeholder="search" onChange={handleInput}></input>
                    </li>
            </ul>
        </nav>
    )
}
}