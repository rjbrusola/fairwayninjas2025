import React from 'react'
import RoundsTable from "./RoundsTable.jsx";
import round1 from "/src/Data/round1.json";
import round2 from "/src/Data/round2.json";
import round3 from "/src/Data/round3.json";
import round4 from "/src/Data/round4.json";
import round5 from "/src/Data/round5.json";
import round6 from "/src/Data/round6.json";
import round7 from "/src/Data/round7.json";
import round8 from "/src/Data/round8.json";


export default function Rounds() {
    return (
        <>
            <RoundsTable roundData={round8} roundDate="7-5" > </RoundsTable>
            <RoundsTable roundData={round7} roundDate="6-28" > </RoundsTable>
            <RoundsTable roundData={round6} roundDate="6-21" > </RoundsTable>
            <RoundsTable roundData={round5} roundDate="6-14" > </RoundsTable>
            <RoundsTable roundData={round4} roundDate="6-7" > </RoundsTable>
            <RoundsTable roundData={round3} roundDate="5-31" > </RoundsTable>
            <RoundsTable roundData={round2} roundDate="5-24" > </RoundsTable>
            <RoundsTable roundData={round1} roundDate="5-17" > </RoundsTable>
        </>
    )
}
