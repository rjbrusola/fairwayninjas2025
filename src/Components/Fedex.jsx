import React from 'react'
import round1fedex from "/src/Data/round1fedex.json";
import round2fedex from "/src/Data/round2fedex.json";
import round3fedex from "/src/Data/round3fedex.json";
import round4fedex from "/src/Data/round4fedex.json";
import round5fedex from "/src/Data/round5fedex.json";


import FedexStandings from "./FedexStandings.jsx";
import FedexRounds from "./FedexRounds.jsx";

export default function Fedex() {
    return (
        <>
            <FedexStandings/>
            <FedexRounds roundData={round5fedex} roundDate="6-14"/>
            <FedexRounds roundData={round4fedex} roundDate="6-7"/>
            <FedexRounds roundData={round3fedex} roundDate="5-31"/>
            <FedexRounds roundData={round2fedex} roundDate="5-24"/>
            <FedexRounds roundData={round1fedex} roundDate="5-17"/>
        </>
    )
}
