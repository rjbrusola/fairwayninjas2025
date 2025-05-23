import React from 'react'
import NinjaCard from "./NinjaCard.jsx";
import ninjas from "/src/Data/players.json";

export default function NinjasList() {
    return (
        <ul className='main'>
            {ninjas.map((ninj,ninjaIndex) => {
                let nm = ninj.pangalan;
                let h = ninj.hdcp;
                let ls = ninj.lowscore;
                let ch = ninj.champion;
                let fdx = ninj.fedex;
                return (
                    <NinjaCard key={ninjaIndex} fedex={fdx} ngalan={nm} handi={h} lscore={ls} champ={ch}>
                        <p>{ninj}</p>
                    </NinjaCard>
                )
            })}
        </ul>
    )
}
