import PropTypes from "prop-types";
import styles from "../styles/Poster.module.css";

function Poster({ img, link }) {
    const handleImageClick = () => {
        window.open(link, "_blank");
    };

    return (
        <div className={styles.poster}>
            <h1 className={styles.heading}>
                Плакат №{img}
            </h1>
            <p className={styles.footerText}>Посмотреть целиком →</p>
            <img
                src={`/posters/${img}.jpg`}
                alt={`Плакат №${img}`}
                className={styles.image}
                onClick={handleImageClick}
            />
        </div>
    );
}

Poster.propTypes = {
    img: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
};

export default Poster;
