import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


export default function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <Link to={props.path} style={{ marginRight: '50px' }}>{props.icon}</Link>
            {/*<a href="#" className="icon-button" onClick={() => setOpen(!open)}>*/}
            {/*    {props.icon} {props.txt}*/}
            {/*</a>*/}
            {open && props.children}
        </li>

    )
}