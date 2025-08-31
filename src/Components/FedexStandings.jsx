import React from 'react'
import fedexPoints from "../Data/fedexpts.json";
import trophy from "../assets/silvertrophy.png"


export default function FedexStandings() {
    return (
        <ul className='main'>
            <table>
                <tbody>
                <tr>
                    <th colSpan="6" className="hdcpth">FedEx Standings</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Total Points</th>
                    <th>Starting Score</th>
                    <th><img src={trophy} alt="Champion"></img> Rd 1 TeeTime</th>
                </tr>
                {fedexPoints.map((item) => {
                    return (
                        <tr className="hdcptr" key={item.ninja}>
                            <td className="hdcptd, ninja" width="16%">{item.ninja}</td>
                            <td className="hdcptd"  width="10%">{item.fedexpts}</td>
                            <td className="hdcptd"  width="10%">{item.willstart}</td>
                            <td className="hdcptd"  width="10%">{item.group}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </ul>
    )
}
