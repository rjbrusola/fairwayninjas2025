import React from 'react'
import round1fedex from "/src/Data/round1fedex.json";
import round2fedex from "/src/Data/round2fedex.json";

import FedexStandings from "./FedexStandings.jsx";
import FedexRounds from "./FedexRounds.jsx";

export default function Fedex() {
    return (
        <>
            <FedexStandings/>
            <FedexRounds roundData={round2fedex} roundDate="5-24"/>
            <FedexRounds roundData={round1fedex} roundDate="5-17"/>
        </>

    )
}
