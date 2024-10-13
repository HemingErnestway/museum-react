import Header from "../components/Header.jsx";
import VeteranCard from "../components/VeteranCard.jsx";
import styles from "../styles/Veterans.module.css";

import veteransData from "/data/veterans.json";

function Veterans() {
    return (
        <>
            <Header
                heading="Научный полк"
                text="Здесь вы сможете познакомиться с участниками Великой Отечественной войны, которые отправились прямиком на фронт с порога нашего университета."
            />

            <section>
                <div className="wrapper">
                    <h1 className="section-heading">Герои нашего университета</h1>
                    <div className={styles.veteransContainer}>
                        {veteransData.veterans.map((veteran) => (
                            <VeteranCard
                                key={veteran.img}
                                img={veteran.img}
                                name={veteran.name}
                                surname={veteran.surname}
                                years={veteran.years}
                                medals={veteran.medals}
                                text={veteran.text}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cinema}>
                <div className="wrapper">
                    <h1 className="section-heading">Фильм «65 лет победы»</h1>
                    <iframe
                        className={styles.video}
                        src="https://rutube.ru/play/embed/aff8c2b103027ee4defe94b67a648dcf"
                        allow="clipboard-write; autoplay"
                        allowFullScreen
                    />
                </div>
            </section>
        </>
    );
}

export default Veterans;
