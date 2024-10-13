import styles from "../styles/RewardCard.module.css";
import PropTypes from "prop-types";

function RewardCard({ img, name }) {
    return (
        <div className={styles.card}>
            <img src={img} alt={name} className={styles.image} />
            <p className={styles.name}>{name}</p>
        </div>
    );
}

RewardCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default RewardCard;
