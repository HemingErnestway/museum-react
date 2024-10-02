import stylesExhibition from "../styles/Exhibition.module.css"

import Header from "../components/Header.jsx";
import ExhibitCard from "../components/ExhibitCard.jsx";

function Exhibits() {
    return (
        <>
            <Header
                heading="Выставка"
                text="Здесь вы можете ознакомиться с некоторыми экспонатами выставки музея — от научного оборудования до спортивных наград."
            />

            {/* Exhibition */}
            <section>
                <div className="wrapper">
                    <h1 className="section-heading">Экспонаты</h1>
                    <div className={stylesExhibition.gridContainer}>
                        <ExhibitCard
                            name="Макет ЯГТУ"
                            text="Рукотворный макет, на котором показано плановое размещение корпусов университета."
                            img="4"
                        />
                        <ExhibitCard
                            name="Макет ЯГТУ"
                            text="Рукотворный макет, на котором показано плановое размещение корпусов университета."
                            img="4"
                        />
                        <ExhibitCard
                            name="Макет ЯГТУ"
                            text="Рукотворный макет, на котором показано плановое размещение корпусов университета."
                            img="4"
                        />
                        <ExhibitCard
                            name="Макет ЯГТУ"
                            text="Рукотворный макет, на котором показано плановое размещение корпусов университета."
                            img="4"
                        />
                        <ExhibitCard
                            name="Макет ЯГТУ"
                            text="Рукотворный макет, на котором показано плановое размещение корпусов университета."
                            img="4"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Exhibits;
