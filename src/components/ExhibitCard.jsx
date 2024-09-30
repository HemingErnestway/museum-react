import styles from "../styles/ExhibitCard.module.css";

function ExhibitCard() {
    return (
        <div className={styles.card}>
            <div className={styles.image}></div>
            <h1>Название экспоната</h1>
        </div>
    );
}

export default ExhibitCard;
