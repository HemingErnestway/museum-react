import stylesWelcome from "../styles/Welcome.module.css";
import stylesAbout from "../styles/About.module.css";
import stylesContacts from "../styles/Contacts.module.css";

import Button from "../components/Button.jsx";
import AboutCard from "../components/AboutCard.jsx";
import ContactsCard from "../components/ContactsCard.jsx";

function Home() {
    return (
        <>
            {/* Welcome */}
            <section className={stylesWelcome.welcome}>
                <div className="wrapper">
                    <div className={stylesWelcome.content}>
                        <h1 className="section-heading">Добро пожаловать в&nbsp;Музей ЯГТУ!</h1>
                        <p className={stylesWelcome.text}>Теперь доступны онлайн: авторская экскурсия, выставка, документы о создании музея и экспозиция «Научный полк».</p>

                        <div className={stylesWelcome.buttonContainer}>
                            <Button to="/tour" label="Онлайн-экскурсия" />
                            <Button to="/#contacts" label="Посетить" outlined />
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section>
                <div className="wrapper">
                    <h1 className="section-heading">Немного о музее</h1>
                    <div className={stylesAbout.gridContainer}>
                        <AboutCard
                            text="Музей открыл свои двери в 2014 году по инициативе Р.&nbsp;И.&nbsp;Попова. Основная тематика выставки — история нашего университета."
                            footer="С&nbsp;документами о создании музея можно ознакомиться здесь&nbsp;→"
                            link="/documents"
                            className={stylesAbout.item1}
                        />
                        <AboutCard
                            text="В музее представлены разнообразные экспонаты: научное оборудование, макеты, фотографии, книги, спортивные и научные награды вуза."
                            footer="Экспонаты можно найти тут&nbsp;→"
                            link="/exhibits"
                            className={stylesAbout.item2}
                        />
                        <AboutCard
                            text="Большую ценность представляет экскурсия по историческим периодам Политеха за авторством Р.&nbsp;И.&nbsp;Попова. В&nbsp;цифровом виде вы узнаете про этапы развития университета — от основания и до наших дней."
                            footer="Онлайн-экскурсия на этой странице&nbsp;→"
                            link="/tour"
                            className={stylesAbout.item3}
                        />
                        <div className={`
                            ${stylesAbout.gridItem}
                            ${stylesAbout.itemImg}`}>
                        </div>
                        <AboutCard
                            text="Не менее важной является экспозиция военной истории ЯГТУ. Во времена Великой Отечетсвенной войны сотрудники вуза отправлялись на фронт прямо «с&nbsp;порога» тогда ещё Института резиновой промышленности. Чтобы почтить память о Героях войны из Политеха, была оцифрована экспозиция «Научный полк»."
                            footer="Подробнее узнать о ветеранах войны из нашего университета можно здесь&nbsp;→"
                            link="/veterans"
                            className={stylesAbout.item4}
                        />
                    </div>
                </div>
            </section>

            {/* Contacts */}
            <section id="contacts" className={stylesContacts.contacts}>
                <div className="wrapper">
                    <h1 className="section-heading">Как добраться</h1>
                    <div className={stylesContacts.gridContainer}>
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
                        <div className={stylesContacts.map}>
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
        </>
    );
}

export default Home;
