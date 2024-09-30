import Exhibition from "../sections/Exhibition.jsx";
import Header from "../sections/Header.jsx";

function Exhibits() {
    return (
        <>
            <Header
                heading="Выставка"
                text="Здесь вы можете ознакомиться с некоторыми экспонатами выставки музея — от научного оборудования до спортивных наград."
            />
            <Exhibition />
        </>
    );
}

export default Exhibits;
