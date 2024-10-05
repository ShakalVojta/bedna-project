import './Header.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleLogoClick = () => {
        navigate('/');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <header className="header">
                <div className="header__logo" onClick={handleLogoClick} style={{cursor: "pointer"}}>
                    <h1>GREENPROVE</h1>
                </div>
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul className="header__nav">
                        <li>
                            <a href="#about">O nás</a>
                        </li>
                        <li>
                            <a href="#services">Naše Služby</a>
                        </li>
                        <li>
                            <a href="#references">Reference</a>
                        </li>
                        <li>
                            <a href="#contact-form">Kontakt</a>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
            </header>
        </>
    );
}

export default Header;
