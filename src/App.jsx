import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./Components/Navbar.jsx";
import NavItem from "./Components/NavItem.jsx";
import Handicap from "./Components/Handicap.jsx";
import Home from "./Components/Home.jsx";
import Ninjas from "./Components/Ninjas.jsx";
import Rounds from "./Components/Rounds.jsx";
import Fedex from "./Components/Fedex.jsx";

function App() {
  return (
    <>
        <Router>
            <Navbar>
                <NavItem icon="🏠" path="/" />
                <NavItem icon="🥷" path="/Ninjas"/>
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
