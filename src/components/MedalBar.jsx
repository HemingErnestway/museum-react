import PropTypes from "prop-types";
import Medal from "./Medal.jsx";
import styles from "../styles/MedalBar.module.css";

function MedalBar({ medals }) {
    return (
        <div className={styles.bar}>
            {medals.map((medal, index) => (
                <Medal key={index} medal={medal} />
            ))}
        </div>
    );
}

MedalBar.propTypes = {
    medals: PropTypes.arrayOf(PropTypes.number),
};

export default MedalBar;
