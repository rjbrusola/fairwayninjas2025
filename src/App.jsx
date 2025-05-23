import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar.jsx";
import NavItem from "./components/NavItem.jsx";

import Handicap from "./components/Handicap.jsx";
import Home from "./components/Home.jsx";
import Ninjas from "./components/Ninjas.jsx";
import Rounds from "./components/Rounds.jsx";
import Fedex from "./components/Fedex.jsx";

function App() {
  return (
    <>
        <Router>
            <Navbar>

                <NavItem icon="🏠" path="/" />
                <NavItem icon="🥷" path="/Ninjas"/>
                    {/*<DropdownMenu/>*/}

                <NavItem icon="♿" path="/Handicap" />
                <NavItem icon="⛳.🏌️" path="/Rounds"/>
                <NavItem icon="✈️" path="/Fedex"/>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Ninjas" element={<Ninjas/>}/>
                <Route path="/Handicap" element={<Handicap/>}/>
                <Route path="/Rounds" element={<Rounds/>}/>
                <Route path="/Fedex" element={<Fedex/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
