import styles from "../styles/ExhibitCard.module.css";
import PropTypes from "prop-types";

function ExhibitCard({ img, name, description }) {
    return (
        <div className={styles.card}>
            <img src={img} alt={name} className={styles.image} />
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.description}>{description}</p>
        </div>
    );
}

ExhibitCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default ExhibitCard;
