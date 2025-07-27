import React from 'react'
import round1fedex from "/src/Data/round1fedex.json";
import round2fedex from "/src/Data/round2fedex.json";
import round3fedex from "/src/Data/round3fedex.json";
import round4fedex from "/src/Data/round4fedex.json";
import round5fedex from "/src/Data/round5fedex.json";
import round6fedex from "/src/Data/round6fedex.json";
import round7fedex from "/src/Data/round7fedex.json";
import round8fedex from "/src/Data/round8fedex.json";
import round9fedex from "/src/Data/round9fedex.json";
import round10fedex from "/src/Data/round10fedex.json";
import round11fedex from "/src/Data/round11fedex.json";


import FedexStandings from "./FedexStandings.jsx";
import FedexRounds from "./FedexRounds.jsx";

export default function Fedex() {
    return (
        <>
            <FedexStandings/>
            <FedexRounds roundData={round11fedex} roundDate="7-26"/>
            <FedexRounds roundData={round10fedex} roundDate="7-19"/>
            <FedexRounds roundData={round9fedex} roundDate="7-12"/>
            <FedexRounds roundData={round8fedex} roundDate="7-5"/>
            <FedexRounds roundData={round7fedex} roundDate="6-28"/>
            <FedexRounds roundData={round6fedex} roundDate="6-21"/>
            <FedexRounds roundData={round5fedex} roundDate="6-14"/>
            <FedexRounds roundData={round4fedex} roundDate="6-7"/>
            <FedexRounds roundData={round3fedex} roundDate="5-31"/>
            <FedexRounds roundData={round2fedex} roundDate="5-24"/>
            <FedexRounds roundData={round1fedex} roundDate="5-17"/>
        </>
    )
}
