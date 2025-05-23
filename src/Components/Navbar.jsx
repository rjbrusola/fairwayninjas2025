import React from "react"

export default function Navbar(props){
    const {children} = props;
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{children}</ul>
        </nav>
    )
}

