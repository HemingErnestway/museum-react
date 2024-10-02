import HTMLReactParser from "html-react-parser";
import PropTypes from "prop-types";
import styles from "../styles/Stand.module.css";

function Stand({ heading, text }) {
    return (
        <div className={styles.stand}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.text}>
                {HTMLReactParser(text)}
            </p>
        </div>
    );
}

Stand.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Stand;
