import styles from "../styles/ContactsCard.module.css";
import PropTypes from "prop-types";

function ContactsCard({ header, text }) {
    return (
        <div className={styles.card}>
            <h1 className={styles.header}>{header}</h1>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

ContactsCard.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default ContactsCard;
