import React from 'react'

export default function Home() {
    return (
        <div className="App">
        <div className="bgroundimg" >
            <div className="h1home">
                <h1><label style={{color:"navajowhite"}}>2025 Fairway Ninjas Golf League</label></h1>
                <br/><br/>
                <ul>
                    <li><h2><label style={{color:"gold"}}>Golfer of the week:</label></h2></li>
                </ul>
                <ul>
                    <li>
                        <h3>6-4: <label className='ninja'>Tony</label> (net 71)</h3>
                    </li>
                    <li>
                        <h3>6-7: <label className='ninja'>Abner</label> (net 72)</h3>
                    </li>
                    <li>
                        <h3>5-31: <label className='ninja'>Jon</label> (net 61)</h3>
                    </li>
                    <li>
                        <h3>5-24: <label className='ninja'>Tony</label> (net 73)</h3>
                    </li>
                    <li>
                        <h3>5-17: <label className='ninja'>Nes</label> (net 72)</h3>
                    </li>

                </ul>


            </div>
        </div>
        </div>

    )
}
