import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 GreenProve. Všechna práva vyhrazena |
                    <a href="mailto:info@greenprove.cz" className="contact-link"> info@greenprove.cz</a> |
                    <a href="tel:+420123456789" className="contact-link"> +420 123 456 789</a>
                </p>
                <div className="footer-social">
                    <a href="#" className="social-link">Facebook</a>
                    <a href="#" className="social-link">Instagram</a>
                    <a href="#" className="social-link">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
