import styles from "../styles/Welcome.module.css";
import Button from "../components/Button.jsx";

function Welcome() {
    return (
        <section className={styles.welcome}>
            <div className="wrapper">
                <div className={styles.content}>
                    <h1 className="section-heading">Добро пожаловать в&nbsp;Музей ЯГТУ!</h1>
                    <p className={styles.text}>Теперь доступны онлайн: авторская экскурсия, выставка, документы о создании музея и экспозиция «Научный полк».</p>

                    <div className={styles.buttonContainer}>
                        <Button to="/tour" label="Онлайн-экскурсия" />
                        <Button to="/#contacts" label="Посетить" outlined />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Welcome;
