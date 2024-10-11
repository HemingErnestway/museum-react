import PropTypes from "prop-types";
import styles from "../styles/Card.module.css";

function Card({ children }) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.element,
};

export default Card;
