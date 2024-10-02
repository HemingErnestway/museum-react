import Header from "../components/Header.jsx";
import Stand from "../components/Stand.jsx";
import styles from "../styles/Tour.module.css";

import tourData from "/data/tour.json";

function Tour() {
    return (
        <>
            <Header
                heading="Экскурсия по музею"
                text="На этой странице вы можете виртуально посетить обзорную экскурсию по экспозиции музея ЯГТУ."
            />

            <section>
                <div className="wrapper">
                    <h1 className="section-heading">История ЯГТУ — история страны</h1>
                    <div className={styles.stands}>
                        {tourData.stands.map((stand) => (
                            <Stand
                                key={stand.heading}
                                heading={stand.heading}
                                text={stand.text}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tour;
