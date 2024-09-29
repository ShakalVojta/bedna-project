import './ContactForm.css';

const ContactForm = () => {
    return (
        <section id="contact-form" className="contact-form">
            <div className="contact-info">
                <h2>Contact</h2>
                <p className="subtitle">Máte projekt, který by mohl těžit z našich udržitelných a ekologických řešení? Neváhejte nás kontaktovat, rádi vám pomůžeme!</p>
                <p>Zaujaly vás naše služby? Jsme připraveni vám pomoci s vaším projektem – od zelených střech po správu dešťové vody. Vyplňte formulář níže a my vás co nejdříve kontaktujeme s návrhem řešení na míru.</p>
            </div>

            <form className="contact-form-fields">
                <input type="text" name="name" placeholder="JMÉNO" required/>
                <input type="email" name="email" placeholder="E-MAIL" required/>
                <select name="subject" required defaultValue="">
                    <option value="" disabled hidden className="type-project">-- Vyberte typ projektu --</option>
                    <option value="Návrh zelené střechy">Návrh zelené střechy</option>
                    <option value="Studie hospodaření s vodami">Studie hospodaření s dešťovými a odpadními vodami
                    </option>
                    <option value="Návrh přírodních prvků">Návrh přírodních prvků pro průmyslové areály</option>
                    <option value="Environmentální školení">Environmentální školení pro firmy</option>
                    <option value="Projekty přípojek">Projekty vodovodních a kanalizačních přípojek</option>
                </select>
                <textarea name="message" placeholder="ZPRÁVA" required/>
                <button type="submit">ODESLAT</button>
            </form>
        </section>
    );
}

export default ContactForm;