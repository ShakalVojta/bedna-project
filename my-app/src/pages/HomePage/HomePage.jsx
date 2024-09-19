import './HomePage.css';
import About from "../../components/About/About.jsx";
import Services from "../../components/Services/Services.jsx";
import References from "../../components/References/References.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";

const HomePage = () => {


    return (
        <>
            <About />
            <Services />
            <References />
            <ContactForm />
        </>
    )
}

export default HomePage