import './Services.css';
import greenRoof from '../../assets/services/green-roof.jpg';
import rainWater from '../../assets/services/rainwater-management.jpg';
import waterPipe from '../../assets/services/water-pipe.jpg';
import greenEducation from '../../assets/services/green-education.jpg';
import industrialArea from '../../assets/services/industrial-design.jpg';

const Services = () => {

    const services = [
        {
            title: <>Návrh udržitelné <br />zelené vegetační <br />střechy</>,
            img: greenRoof,
            description: [
                "Zadržování dešťové vody",
                "Snížení teploty v okolí",
                "Zlepšení mikroklimatu"
            ]
        },
        {
            title: <>Studie hospodaření<br />s dešťovými<br />a odpadními vodami</>,
            img: rainWater,
            description: [
                "Efektivní využívání vodních zdrojů",
                "Zajištění vodních zdrojů",
                "Optimalizace vodních cest"
            ]
        },
        {
            title: <>Návrh přírodních prvků pro průmyslové<br />areály</>,
            img: industrialArea,
            description: [
                "Podpora biodiverzity",
                "Zlepšení mikroklimatu",
                "Ekologická integrace"
            ]
        },
        {
            title: <>Environmentální<br />školení pro<br />firmy</>,
            img: greenEducation,
            description: [
                "Zvýšení povědomí o ekologii",
                "Snižování ekologické stopy",
                "Vzdělávání pracovníků"
            ]
        },
        {
            title: <>Projekty vodovodních<br />a kanalizačních<br />přípojek</>,
            img: waterPipe,
            description: [
                "Moderní technologie",
                "Efektivní vodní řešení",
                "Optimalizace infrastruktury"
            ]
        }
    ];

    return (
        <section className="services" id="services">
            <h2>Naše služby</h2>
            <hr />
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-tile" key={index}>
                        <div className="service-header">
                            <img src={service.img} alt={service.title} />
                            <h3>{service.title}</h3>
                        </div>
                        <div className="service-content">
                            {service.description.map((point, idx) => (
                                <div key={idx} className="service-point">
                                    <span className="checkmark">✔️</span>
                                    <p>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
