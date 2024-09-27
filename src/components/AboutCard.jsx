import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AboutCard.module.css";

function AboutCard({ text, footer, link }) {
    const navigate = useNavigate();

    return (
        <div className={styles.card}
             onClick={() => navigate(link)}
        >
            <p>{text}</p>
            <div>
                <div className={styles.separator}></div>
                <p className={styles.footerText}>{footer}</p>
            </div>
        </div>
    );
}

AboutCard.propTypes = {
    text: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default AboutCard;
