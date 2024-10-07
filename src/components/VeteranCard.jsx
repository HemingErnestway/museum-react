import PropTypes from "prop-types";
import styles from "../styles/VeteranCard.module.css";
import MedalBar from "./MedalBar.jsx";

function VeteranCard({ img, name, surname, years, medals, text }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={`/veterans/${img}.png`}
                    alt={`${name} ${surname}`}
                    className={styles.image}
                />
                <p className={styles.years}>{years}</p>
            </div>
            <div className={styles.content}>
                <h1 className={styles.name}>
                    {name} {surname}
                </h1>
                <MedalBar medals={medals} />
                <p>{text}</p>
            </div>
        </div>
    );
}

VeteranCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    medals: PropTypes.arrayOf(PropTypes.number).isRequired,
    text: PropTypes.string.isRequired,
};

export default VeteranCard;
