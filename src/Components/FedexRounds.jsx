import React from 'react'

export default function FedexRounds(props) {
    const {roundData, roundDate} = props;
    return (
        <ul className='main'>
            <table>
                <tbody>
                <tr>
                    <th colSpan="5" className="hdcpth">{roundDate} Round</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Net</th>
                    <th>Points</th>
                    <th>for FedEx</th>
                </tr>
                {roundData.map((item) => {
                    return (
                        <tr className="hdcptr" key={item.pangalan + roundDate}>
                            <td className="hdcptd, ninja" width="16%">{item.pangalan}</td>
                            <td className="hdcptd"  width="10%">{item.net}</td>
                            <td className="hdcptd"  width="22%">{item.points}</td>
                            <td className="hdcptd"  width="10%">{item.forfedex}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </ul>
    )
}
