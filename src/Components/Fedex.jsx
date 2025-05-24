import React from 'react'
import fedexPoints from "/src/Data/fedexpts.json";

export default function Fedex() {
    return (
        <ul className='main'>
                    <table>
                        <tbody>
                        <tr>
                            <th colSpan="6" className="hdcpth">FedEx Standings</th>
                        </tr>
                        <tr>
                            <th>Ninja</th>
                            <th>Total Points</th>
                        </tr>
                        {fedexPoints.map((item) => {
                            return (
                                <tr className="hdcptr" key={item.ninja}>
                                    <td className="hdcptd" width="16%">{item.ninja}</td>
                                    <td className="hdcptd"  width="10%">{item.fedexpts}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
        </ul>
    )
}
