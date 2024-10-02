import PropTypes from "prop-types";
import styles from "../styles/Header.module.css";

function Header({ heading, text }) {
    return (
        <section className={styles.header}>
            <div className="wrapper">
                <div className={styles.content}>
                    <h1 className="section-heading">{heading}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </section>
    );
}

Header.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Header;
