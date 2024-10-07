import PropTypes from "prop-types";
import styles from "../styles/MedalBar.module.css";

function MedalBar({ medals }) {
    return (
        <div className={styles.bar}>
            {medals.map((medal, index) => (
            ))}
        </div>
    );
}

MedalBar.propTypes = {
    medals: PropTypes.arrayOf(PropTypes.number),
};

export default MedalBar;
