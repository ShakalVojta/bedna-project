import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/references/img1.jpg';
import img2 from '../../assets/references/img2.jpg';
import img3 from '../../assets/references/img3.jpg';
import img4 from '../../assets/references/img4.jpg';
import img5 from '../../assets/references/img5.jpg';
import './References.css';

const references = [
    { title: "Biodiverzní střecha ČVUT", date: "Realizace červen 2022", img: img1 },
    { title: "Zelená střecha Třeboň", date: "Realizace září 2023", img: img2 },
    { title: "Revitalizace Modravy", date: "Realizace duben 2024", img: img3 },
    { title: "Stezka zaniklými rybníky v Chlumu", date: "Realizace srpen 2024", img: img4 },
    { title: "Projekt číslo pět", date: "Realizace říjen 2024", img: img5 },
];

const References = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <section className="references" id="references">
            <h2>REFERENCE</h2>
            <p>Tady bude časem popis jednotlivých projektů, které se udělali, zatím jsem nula. Místo těch mýdel budou obrázky z projektů a popis max jedna věta.</p>
            <hr />
            <Slider {...settings}>
                {references.map((reference, idx) => (
                    <div key={idx} className="reference-card">
                        <img src={reference.img} alt={reference.title} className="reference-image" />
                        <h3>{reference.title}</h3>
                        <p>{reference.date}</p>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default References;
