import './Services.css';
import greenRoof from '../../assets/services/green-roof.jpg';
import rainWater from '../../assets/services/rainwater-management.jpg';
import waterPipe from '../../assets/services/water-pipe.jpg';
import greenEducation from '../../assets/services/green-education.jpg';
import industrialArea from '../../assets/services/industrial-design.jpg'

const Services = () => {

    const services = [
        {
            title: "Návrh zelené střechy",
            img: greenRoof,
            description: "Zelené střechy jsou jedním z nejefektivnějších způsobů, jak využít zelenou infrastrukturu ve městě. Umožňují zadržování dešťové vody a snižují teplotu v okolním prostředí."
        },
        {
            title: "Studie hospodaření s dešťovými a odpadními vodami",
            img: rainWater,
            description: "Studie hospodaření s dešťovými a odpadními vodami je klíčová pro efektivní využívání vodních zdrojů a zajištění udržitelného přístupu k vodě."
        },
        {
            title: "Návrh přírodních prvků pro průmyslové areály",
            img: industrialArea,
            description: "Přidání přírodních prvků do průmyslových areálů podporuje biodiverzitu, zlepšuje mikroklima a přispívá k lepšímu životnímu prostředí."
        },
        {
            title: "Environmentální školení pro firmy",
            img: greenEducation,
            description: "Poskytujeme školení zaměřená na environmentální povědomí a udržitelné praktiky, které pomáhají firmám snižovat jejich ekologickou stopu."
        },
        {
            title: "Projekty vodovodních a kanalizačních přípojek",
            img: waterPipe,
            description: "Naše projekty vodovodních a kanalizačních přípojek se zaměřují na moderní technologie a udržitelné řešení pro efektivní nakládání s vodou."
        }
    ];

    return (
        <section className="services" id="services">
            <h2>Naše služby</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-tile" key={index}>
                        <div className="service-header">
                            <img src={service.img} alt={service.title} />
                            <h3>{service.title}</h3>
                        </div>
                        <div className="service-content">
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
