import styles from "../styles/Footer.module.css";
import Card from "./Card.jsx";

function Footer() {
    const year = new Date().getFullYear();
    const copyrightText = `© 1944-${year}, ФГБОУ ВО «ЯГТУ», Музей Истории ЯГТУ`;

    return (
        <section className={styles.footer}>
            <div className="wrapper">
                <div className={styles.gridContainer}>
                    <Card>
                        <h1>Полезные ссылки</h1>
                        <p>
                            <a href="https://ystu.ru">Официальный сайт ЯГТУ</a> <br />
                            <a href="https://vk.com/ystu">Группа ВК</a>
                        </p>
                    </Card>
                    <Card>
                        <h1>Проведение экскурсий</h1>
                        <p>
                            Попов Роман Игоревич <br />
                            +7 (960) 529-78-90 <br />
                            popovri@edu.ystu.ru
                        </p>
                    </Card>
                    <Card>
                        <p className={styles.copyright}>
                            Разработкой сайта занимались студенты ЯГТУ: Антон Смирнов, Вадим Васьков, Виталий Никитин
                            (под руководством Р. И. Попова).
                        </p>
                        <div className={styles.separator}></div>
                        <p className={styles.copyright}>
                            {copyrightText}
                        </p>
                    </Card>
                    {/*<Card>*/}
                    {/*    <p className={styles.copyright}>*/}
                    {/*        {copyrightText}*/}
                    {/*    </p>*/}
                    {/*</Card>*/}
                </div>

            </div>
        </section>
    );
}

export default Footer;
