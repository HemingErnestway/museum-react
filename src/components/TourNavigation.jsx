import styles from "../styles/TourNavigation.module.css";

function TourNavigation() {
    const stands = [
        "Введение", "1", "2", "3", "4", "5", "6-7", "8",
        "9", "10", "11-12", "13", "14", "15", "16-17",
    ];

    const navigate = (sectionName) => {
        const element = document.getElementById(sectionName);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={styles.navigation}>
            {stands.map((stand) => (
                <a key={stand}
                   onClick={() => navigate(`Стенд-${stand}`)}
                   className={styles.navLink}
                >{stand}</a>
            ))}
        </div>
    );
}

export default TourNavigation;
