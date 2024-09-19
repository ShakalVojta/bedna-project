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
            <div className="header__logo" onClick={handleLogoClick} style={{ cursor: "pointer"}}>
                <h1>GREENPROVE</h1>
            </div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul className="header__nav">
                    <li><button onClick={() => navigate('/about')}>O nás</button></li>
                    <li><button onClick={() => navigate('/services')}>Naše Služby</button></li>
                    <li><button onClick={() => navigate('/references')}>Reference</button></li>
                    <li><button onClick={() => navigate('/contact')}>Kontakt</button></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>☰</div>

        </header>
        <hr />
        </>
    );
}

export default Header;
