import React from 'react'
import handicapCalculations from "/src/Data/hdcpcalculation.json";
import ScoreDifferentials from "./ScoreDifferentials.jsx";

export default function Handicap() {
    return (

        <ul className='main'>
            <table>
                <tbody>
                <tr>
                    <th colSpan="6" className="hdcpth">Handicap Calculcation</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Total Rds</th>
                    <th>Scores to use</th>
                    <th>Low Scores</th>
                    <th>Avg</th>
                    <th>HDCP</th>
                </tr>
                {handicapCalculations.map((item) => {
                    return (
                        <tr className="hdcptr" key={item.pangalan}>
                            <td className="hdcptd, ninja" width="16%">{item.pangalan}</td>
                            <td className="hdcptd"  width="10%">{item.totalrounds}</td>
                            <td className="hdcptd"  width="19%">{item.scorestouse}</td>
                            <td className="hdcptd"  width="22%">{item.lowestscores}</td>
                            <td className="hdcptd"  width="10%">{item.avg}</td>
                            <td className="hdcptd"  width="19%">{item.hdcp}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <ScoreDifferentials />
        </ul>
    )
}
