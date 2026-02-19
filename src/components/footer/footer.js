
import { useContext } from "react"
import "./footer.css"
import { ThemeContext } from "../../context/ThemeContext"

export function Footer() {

    const {theme, } = useContext(ThemeContext);
    return(
        <footer>
            <div className="footer-item">
            <i class="fa-brands fa-instagram"></i>
            Instagram
            </div>
             <div className="footer-item">
            <i class="fa-brands fa-youtube"></i>
            Youtube
            </div>
             <div className="footer-item">
            <i class="fa-brands fa-linkedin"></i>
            Linkedin
            </div>
        </footer>
    )
}