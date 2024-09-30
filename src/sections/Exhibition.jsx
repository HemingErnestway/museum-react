import styles from "../styles/Exhibition.module.css";
import ExhibitCard from "../components/ExhibitCard.jsx";

function Exhibition() {
    return (
        <section>
            <div className="wrapper">
                <h1 className="section-heading">Экспонаты</h1>
                <div className={styles.gridContainer}>
                    <ExhibitCard />
                    <ExhibitCard />
                    <ExhibitCard />
                    <ExhibitCard />
                    <ExhibitCard />
                    <ExhibitCard />
                    <ExhibitCard />
                    <ExhibitCard />
                </div>
            </div>
        </section>
    );
}

export default Exhibition;
