import React from 'react'
import RoundsTable from "./RoundsTable.jsx";

export default function Rounds() {
    return (
        <>
            <RoundsTable roundData={round5} roundDate="6-14" > </RoundsTable>
            <RoundsTable roundData={round4} roundDate="6-7" > </RoundsTable>
            <RoundsTable roundData={round3} roundDate="5-31" > </RoundsTable>
            <RoundsTable roundData={round2} roundDate="5-24" > </RoundsTable>
            <RoundsTable roundData={round1} roundDate="5-17" > </RoundsTable>
        </>
    )
}
