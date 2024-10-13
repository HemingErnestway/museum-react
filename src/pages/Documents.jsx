import Header from "../components/Header.jsx";
import styles from "../styles/Documents.module.css";

function Documents() {
    const documents = [1, 2, 3, 4, 5];

    return (
        <>
            <Header
                heading="Документы"
                text="На этой странице представлены учредительные документы о создании музея истории ЯГТУ."
            />

            <section>
                <div className="wrapper">
                    <div className={styles.imageContainer}>
                        {documents.map((doc) => (
                            <img
                                className={styles.image}
                                key={doc}
                                src={`/documents/${doc}.png`}
                                alt={`Документ №${doc}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Documents;
