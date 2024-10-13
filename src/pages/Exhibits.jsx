import stylesExhibition from "../styles/Exhibition.module.css";
import stylesRewards from "../styles/Rewards.module.css";
import stylesPosters from "../styles/Posters.module.css";

import Header from "../components/Header.jsx";
import ExhibitCard from "../components/ExhibitCard.jsx";
import RewardCard from "../components/RewardCard.jsx";
import Poster from "../components/Poster.jsx";

import exhibitsData from "/data/exhibits.json";
import rewardsData from "/data/rewards.json";

function Exhibits() {
    const posters = [
        {img: 1, link: "https://i.imgur.com/7IlQMay.jpg"},
        {img: 2, link: "https://i.imgur.com/NqE9bN7.jpg"},
        {img: 3, link: "https://i.imgur.com/1MMxJgP.jpg"},
        {img: 4, link: "https://i.imgur.com/nFF6ASz.jpg"},
        {img: 5, link: "https://i.imgur.com/PHaCl0x.jpg"},
        {img: 6, link: "https://i.imgur.com/YEoflVM.jpg"},
        {img: 7, link: "https://i.imgur.com/XdlxXp4.jpg"},
        {img: 8, link: "https://i.imgur.com/L9FDgyT.jpg"},
        {img: 9, link: "https://i.imgur.com/bu1bf4m.jpg"},
        {img: 10, link: "https://i.imgur.com/7UzTh6z.jpg"},
        {img: 11, link: "https://i.imgur.com/XBTl6sF.jpg"},
        {img: 12, link: "https://i.imgur.com/pzL7RhL.jpg"},
        {img: 13, link: "https://i.imgur.com/7HtKXLF.jpg"},
        {img: 14, link: "https://i.imgur.com/nHLXs2V.jpg"},
        {img: 15, link: "https://i.imgur.com/0mERjv4.jpg"},
    ];

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
                        {exhibitsData.exhibits.map((exhibit) => (
                            <ExhibitCard
                                key={exhibit.name}
                                img={`/exhibits/${exhibit.img}.png`}
                                name={exhibit.name}
                                description={exhibit.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Rewards */}
            <section className={stylesRewards.rewards}>
                <div className="wrapper">
                    <h1 className="section-heading">Награды университета</h1>
                    <div className={stylesRewards.gridContainer}>
                        {rewardsData.rewards.map((reward) => (
                            <RewardCard
                                key={reward.name}
                                img={`/rewards/${reward.img}.png`}
                                name={reward.name}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Posters */}
            <section>
                <div className="wrapper">
                    <h1 className="section-heading">Плакаты</h1>
                    <div className={stylesPosters.gridContainer}>
                        {posters.map((poster) => (
                            <Poster key={poster.img} img={poster.img} link={poster.link} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Exhibits;
