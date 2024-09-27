import styles from "../styles/About.module.css";
import AboutCard from "../components/AboutCard.jsx";

function About() {
    return (
        <section>
            <div className="wrapper">
                <h1 className="section-heading">Немного о музее</h1>
                <div className={styles.gridContainer}>
                    <AboutCard
                        text="Музей открыл свои двери в 2014 году по инициативе Р.&nbsp;И.&nbsp;Попова. Основная тематика выставки — история нашего университета."
                        footer="С&nbsp;документами о создании музея можно ознакомиться здесь →"
                        link="/documents"
                        className={styles.item1}
                    />
                    <AboutCard
                        text="В музее представлены разнообразные экспонаты: научное оборудование, макеты, фотографии, книги, спортивные и научные награды вуза."
                        footer="Экспонаты можно найти тут →"
                        link="/exhibits"
                        className={styles.item2}
                    />
                    <AboutCard
                        text="Большую ценность представляет экскурсия по историческим периодам Политеха за авторством Р.&nbsp;И.&nbsp;Попова. В&nbsp;цифровом виде вы узнаете про этапы развития университета — от основания и до наших дней."
                        footer="Онлайн-экскурсия на этой странице →"
                        link="/tour"
                        className={styles.item3}
                    />
                    <div className={`
                        ${styles.gridItem}
                        ${styles.itemImg}`}>
                    </div>
                    <AboutCard
                        text="Не менее важной является экспозиция военной истории ЯГТУ. Во времена Великой Отечетсвенной войны сотрудники вуза отправлялись на фронт прямо «с&nbsp;порога» тогда ещё Института резиновой промышленности. Чтобы почтить память о Героях войны из Политеха, была оцифрована экспозиция «Научный полк»."
                        footer="Подробнее узнать о ветеранах войны из нашего университета можно здесь →"
                        link="/veterans"
                        className={styles.item4}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
