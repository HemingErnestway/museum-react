import styles from "../styles/Exhibition.module.css";
import ExhibitCard from "../components/ExhibitCard.jsx";

function Exhibition() {
    return (
        <section>
            <div className="wrapper">
                <h1 className="section-heading">Экспонаты</h1>
                <div className={styles.gridContainer}>
                    <ExhibitCard
                        name="Макет ЯГТУ"
                        text="Рукотворный макет, на котором показано плановое размещение корпусов университета."
                        img="4"
                    />
                    <ExhibitCard
                        name="Макет ЯГТУ"
                        text="Рукотворный макет, на котором показано плановое размещение корпусов университета."
                        img="4"
                    />
                    <ExhibitCard
                        name="Макет ЯГТУ"
                        text="Рукотворный макет, на котором показано плановое размещение корпусов университета."
                        img="4"
                    />
                    <ExhibitCard
                        name="Макет ЯГТУ"
                        text="Рукотворный макет, на котором показано плановое размещение корпусов университета."
                        img="4"
                    />
                    <ExhibitCard
                        name="Макет ЯГТУ"
                        text="Рукотворный макет, на котором показано плановое размещение корпусов университета."
                        img="4"
                    />
                </div>
            </div>
        </section>
    );
}

export default Exhibition;
