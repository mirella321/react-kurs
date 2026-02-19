import './nav.css';

export function Nav() {
const handleInput = (e) => {
    console.log("kliknięto: ", e.target.value);
};
{

    return(
        <nav>
            <span><i class="fa-brands fa-bitcoin"></i></span>
            <ul>
                <li>
                    
 
<i class="fa-brands fa-dashcube"></i>
                    Dashboard
                </li>
                <li>
                         <i class="fa-solid fa-newspaper"></i>
                         news
            
                </li>
                <li>
                    <i class="fa-solid fa-person"></i>
                    Users</li>
                    <li>
                        <input placeholder="search" onChange={handleInput}></input>
                    </li>
            </ul>
        </nav>
    )
}
}