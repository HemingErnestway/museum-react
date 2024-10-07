import PropTypes from "prop-types";
import styles from "../styles/Medal.module.css";

function Medal({ medal }) {
    return (
        <div className={styles.medal}>
            <img src={`/medal_icons/${medal}.svg`} alt="" />
        </div>
    );
}

Medal.propTypes = {
    medal: PropTypes.number,
};

export default Medal;
