import React from 'react'
import scoreDifferentials from "../Data/scoredifferentials.json";

export default function ScoreDifferentials() {
    return (
        <ul className='main'>
            <table>
                <tbody>
                <tr>
                    <th colSpan="6" className="hdcpth">Score Differentials</th>
                </tr>
                <tr>
                    <th># of Rounds Played</th>
                    <th># of Rounds Used in HDCP Calculation</th>
                    <th>Adjustment</th>
                </tr>
                {scoreDifferentials.map((item) => {
                    return (
                        <tr className="hdcptr" key={item.noofscoresinrecord}>
                            <td className="hdcptd" width="34%">{item.noofscoresinrecord}</td>
                            <td className="hdcptd" width="33%">{item.scoresusedhdcpcalc}</td>
                            <td className="hdcptd"  width="33%">{item.adjustment}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </ul>

    )
}


