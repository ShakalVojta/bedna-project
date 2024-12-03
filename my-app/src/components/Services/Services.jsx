import './Services.css';
import greenRoof from '../../assets/services/green-roof.jpeg';
import rainWater from '../../assets/services/rainwater-management.jpg';
import waterPipe from '../../assets/services/water-pipe.jpeg';
import greenEducation from '../../assets/services/green-education.jpg';
import industrialArea from '../../assets/services/industrial-design.jpeg';

const Services = () => {

    const services = [
        {
            title: <>Návrh udržitelné <br />zelené vegetační <br />střechy</>,
            img: greenRoof,
            description: [
                "Zadržování dešťové vody",
                "Zvýšení životnosti střechy",
                "Zlepšení mikroklimatu"
            ]
        },
        {
            title: <>Studie hospodaření<br />s dešťovými<br />a odpadními vodami</>,
            img: rainWater,
            description: [
                "Návrh velikosti akumulačních nádrží",
                "Návrh využití dešťových a odpadních vod",
                "Ekonomické a ekologické využití vodních zdrojů"
            ]
        },
        {
            title: <>Návrh ekologických prvků pro domy<br /> a areály</>,
            img: industrialArea,
            description: [
                "Podpora biodiverzity",
                "Zlepšení mikroklimatu",
                "Snížení nákladů na provoz budov"
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
            title: <>Projekty ČOV, vodovodních a kanalizačních přípojek</>,
            img: waterPipe,
            description: [
                "Projektová dokumentace pro územní souhlas",
                "Vyřízení z pohodlí domova",
                "Garantujeme nejnižší cenu"
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
