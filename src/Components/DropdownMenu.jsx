import React from 'react'

export default function DropdownMenu() {
    function DropdownItem(props){
        return (
            <a href="#" className="menu-item" onClick={() => setOpen(!open)}>
                {props.children}
            </a>
        )
    }

    return (
        <div className="dropdown">
            <DropdownItem>Abe</DropdownItem>
            <DropdownItem>Abner</DropdownItem>
            <DropdownItem>Boyet</DropdownItem>
            <DropdownItem>Jim</DropdownItem>
            <DropdownItem>Jon</DropdownItem>
            <DropdownItem>Lito</DropdownItem>
            <DropdownItem>'Mel</DropdownItem>
            <DropdownItem>Nes</DropdownItem>
            <DropdownItem>Tom</DropdownItem>
            <DropdownItem>Tony</DropdownItem>
            <DropdownItem>Vedel</DropdownItem>
        </div>
    )
}
