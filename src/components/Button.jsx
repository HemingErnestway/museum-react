import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Button.module.css";

function Button({ to, label, outlined = false }) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(to)}
            className={`
                ${styles.base} 
                ${outlined ? styles.outlined : styles.primary}
            `}
        >
            {label}
        </button>
    );
}

Button.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    outlined: PropTypes.bool,
};

export default Button;
