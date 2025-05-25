import React from 'react'
import RoundsTable from "./RoundsTable.jsx";
import round1 from "/src/Data/round1.json";
import round2 from "/src/Data/round2.json";


export default function Rounds() {
    return (
        <>
        <RoundsTable roundData={round2} roundDate="5-24" > </RoundsTable>
        <RoundsTable roundData={round1} roundDate="5-17" > </RoundsTable>
        </>
    )
}
