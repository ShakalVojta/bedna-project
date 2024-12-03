import './About.css';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.png';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__banner">
                <div className="about__banner-text">
                    <h2>Sucho</h2>
                    <h2>Voda v krajině</h2>
                    <h2>Zelené bydlení</h2>
                </div>
            </div>
            <div className="about__content-container">
                <div className="about__content">
                    <p>
                       Zabýváme se komplexním řešením a problematikou životního prostředí. Mezi naše obory patří návrh jednoduchých i složitějších zelených střech, studie hospodaření s dešťovými i odpadními vodami, návrh přírodě blízkých biodiverzních řešení pro malé i velké objekty, školení pro firmy či projekty vodovodních a kanalizačních přípojek.
                    </p>
                </div>
                <div className="about__images">
                    <div className="image" style={{ backgroundImage: `url(${img1})` }}></div>
                    <div className="image" style={{ backgroundImage: `url(${img2})` }}></div>
                    <div className="image" style={{ backgroundImage: `url(${img3})` }}></div>
                </div>
            </div>
        </section>
    );
};

export default About;
