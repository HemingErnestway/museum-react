import styles from "../styles/ExhibitCard.module.css";
import PropTypes from "prop-types";

function ExhibitCard({ name, text, img }) {
    const source = `/exhibits/${img}.png`;
    return (
        <div className={styles.card}>
            <img src={source} alt={name} className={styles.image} />
            <h1 className={styles.heading}>{name}</h1>
            <p>{text}</p>
        </div>
    );
}

ExhibitCard.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default ExhibitCard;
