import Header from "../components/Header.jsx";
import Stand from "../components/Stand.jsx";
import styles from "../styles/Tour.module.css";

import tourData from "/data/tour.json";
import TourNavigation from "../components/TourNavigation.jsx";

function Tour() {
    const stands = [
        "Введение", "1", "2", "3", "4", "5", "6-7", "8",
        "9", "10", "11-12", "13", "14", "15", "16-17",
    ];

    return (
        <>
            <Header
                heading="Экскурсия по музею"
                text="На этой странице вы можете виртуально посетить обзорную экскурсию по экспозиции музея ЯГТУ."
            />

            <section>
                <div className="wrapper">
                    <h1 className="section-heading">История ЯГТУ — история страны</h1>
                    <div className={styles.standsWithNavigation}>
                        <TourNavigation />
                        <div className={styles.stands}>
                            {tourData.stands.map((stand, index) => (
                                <Stand
                                    key={stand.heading}
                                    heading={stand.heading}
                                    text={stand.text}
                                    images={stand.images}
                                    id={`Стенд-${stands[index]}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tour;
