import React from "react"

export default function Navibar(props){
    const {children} = props;
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{children}</ul>
        </nav>

    )
}

