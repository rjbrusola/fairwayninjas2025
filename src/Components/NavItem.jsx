
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import happy from "../assets/fedexNav.png";


export default function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <Link to={props.path} className='lnk' style={{ marginRight: '38px'}}>
                {props.icon != "" ? props.icon : <img src={happy}/> }
                </Link>
            {open && props.children}
        </li>

    )
}