import './ContactForm.css';

const ContactForm = () => {
    return (
        <section id="contact-form" className="contact-form">
            <div className="contact-info">
                <h2>Kontakt</h2>
                <hr />
                <p className="subtitle">Máte projekt, který by mohl těžit z našich udržitelných a ekologických řešení? Neváhejte nás kontaktovat, rádi vám pomůžeme!</p>
                <p>Zaujaly vás naše služby? Jsme připraveni vám pomoci s vaším projektem – od zelených střech po návrh velikosti dešťových nádrží. Vyplňte formulář níže a my vás co nejdříve kontaktujeme s návrhem řešení na míru.</p>
            </div>

            <form className="contact-form-fields">
                <input type="text" name="name" placeholder="JMÉNO" required/>
                <input type="email" name="email" placeholder="E-MAIL" required/>
                <select name="subject" required defaultValue="">
                    <option value="" disabled hidden className="type-project">-- Vyberte typ projektu --</option>
                    <option value="Návrh zelené střechy">Návrh udržitelné zelené vegetační střechy</option>
                    <option value="Studie hospodaření s vodami">Studie hospodaření s dešťovými a odpadními vodami
                    </option>
                    <option value="Návrh přírodních prvků">Návrh ekologických prvků pro domy a areály</option>
                    <option value="Environmentální školení">Environmentální školení pro firmy</option>
                    <option value="Projekty přípojek">Projekty ČOV, vodovodních a kanalizačních přípojek</option>
                    <option value="jiné">Jiné</option>
                </select>
                <textarea name="message" placeholder="ZPRÁVA" required/>
                <button type="submit">ODESLAT</button>
            </form>
        </section>
    );
}

export default ContactForm;