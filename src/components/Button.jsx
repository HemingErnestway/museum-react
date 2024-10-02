import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Button.module.css";

function Button({ to, label, outlined = false }) {
    let handleClick;
    const splitPath = to.split("/");

    if (splitPath[splitPath.length - 1][0] === "#") {
        const sectionName = splitPath[splitPath.length - 1].substring(1);
        handleClick = () => {
            const element = document.getElementById(sectionName);
            element?.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        const navigate = useNavigate();
        handleClick = () => {
            navigate(to);
        }
    }

    return (
        <button
            onClick={handleClick}
            className={`${styles.base} ${outlined ? styles.outlined : styles.primary}`}
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
