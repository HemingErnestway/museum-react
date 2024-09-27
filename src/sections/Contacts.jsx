import styles from "../styles/Contacts.module.css";
import ContactsCard from "../components/ContactsCard.jsx";

function Contacts() {
    return (
        <section id="contacts" className={styles.contacts}>
            <div className="wrapper">
                <h1 className="section-heading">Как добраться</h1>
                <div className={styles.gridContainer}>
                    <ContactsCard
                        header="Время работы"
                        text="пн: 15:00 — 18:00
                              ср: 10:00 — 13:00
                              пт: 10:00 — 12:00"
                    />
                    <ContactsCard
                        header="Адрес"
                        text="Ярославль, Московский пр, д.&nbsp;84, ЯГТУ, учебный корпус «А», ауд. А-104 (первый этаж)"
                    />
                    <ContactsCard
                        header="Заведующий"
                        text="Попов Роман Игоревич
                              +7 (960) 529-78-90
                              popovri@edu.ystu.ru"
                    />
                    <div className={styles.map}>
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d980.5343776160851!2d39.85645565929943!3d57.58793828982718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b2934c5a272d13%3A0xd0ee4bc98173c461!2z0KLQvtGH0LrQsCDQutC40L_QtdC90LjRjyDQr9CT0KLQow!5e0!3m2!1sru!2sru!4v1702453730101!5m2!1sru!2sru&suppressInfoWindows=true"
                            allow="fullscreen"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
