import HTMLReactParser from "html-react-parser";
import PropTypes from "prop-types";
import styles from "../styles/Stand.module.css";

function Stand({ heading, text, images, id }) {
    return (
        <div className={styles.stand} id={id}>
            <div className={styles.content}>
                <h1 className={styles.heading}>{heading}</h1>
                <p className={styles.text}>
                    {HTMLReactParser(text)}
                </p>
            </div>
            <div className={styles.posters}>
                {images.map((image) => (
                    <img
                        key={image}
                        src={`/tour/${image}.png`}
                        alt={`Плакат ${image}`}
                        className={styles.poster}
                    />
                ))}
            </div>
        </div>
    );
}

Stand.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.number).isRequired,
    id: PropTypes.string.isRequired,
};

export default Stand;
