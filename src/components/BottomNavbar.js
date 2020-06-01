import React from 'react';
import '../App.css';

import { Navbar, Nav, NavDropdown, Button, DropdownButton} from 'react-bootstrap';
import { RiHome2Line } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegBookmark } from 'react-icons/fa';

class BottomNavBar extends React.Component {
    render(){
        return(
            <div className='bottom-navbar'>
            <Navbar  expand="lg">
                <Button variant="no-outline"><RiHome2Line /></Button>{' '} 
                <Button variant="no-outline"><AiOutlineSearch /></Button>{' '} 
                <Button variant="no-outline"><FaRegBookmark /></Button>{' '} 
                <DropdownButton
                    drop='up'
                    variant="secondary"
                    ></DropdownButton>
                
            </Navbar>
            </div>
        )
    }
}

export default BottomNavBar;