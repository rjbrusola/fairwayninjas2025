import React from 'react'
import trophy from "../assets/silvertrophy.png"
import fedeximg from "../assets/fedexLogo2.png"

export default function NinjaCard(props) {

    return (
        <li>
            <table width="100%">
                <tbody>
                <tr>
                    <td width="60%" className="ninja">
                        {props.ngalan}
                    </td>
                    <td width="40%" align="right">
                        {props.champ !== "" ? (
                            <div className="actionsContainer">{props.champ}
                                <img src={trophy} alt="Champion"></img></div>
                        ) : ("")}
                    </td>
                </tr>
                <tr>
                    <td>HDCP: <font className="fieldvalues">{props.handi}</font></td>

                </tr>
                <tr>
                    <td>Lowest Scores: <font className="fieldvalues">{props.lscore}</font></td>
                    <td><img src={fedeximg} alt="FedEx"/>&nbsp;pts: &nbsp;&nbsp;<font className="fieldvalues">{props.fedex}</font></td>
                </tr>
                </tbody>
            </table>
            <hgroup/>

        </li>
    )
}
