//MATERIAL ICON IMPORTS
import { useState } from 'react';

import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Settings from '@material-ui/icons/Settings';


const Nav = () => {

    const [menuActive, setMenuActice] = useState(false)

    return (
        <div className="nav">

            <div className="nav-wrapper">

                <div className="nav-left">

                    <h1 className="nav-logo">Cybersocial</h1>

                    <div className="nav-search">

                        <SearchIcon className="search-icon" />
                        <input className="nav-input" type="text" placeholder="Search for friends" />

                    </div>


                </div>

                <div className="nav-center">


                    <div className="nav-center-icons">

                        <HomeIcon className="nav-icon" />

                        <PersonIcon className="nav-icon" />

                        <ChatIcon className="nav-icon" />

                        <NotificationsIcon className="nav-icon" />

                    </div>


                </div>

                <div className="nav-right">

                    <div className="nav-right-profile">

                        <img className="nav-profile-pic" src="/assets/images/images.jpeg" alt="a" />
                        <span className="nav-username"> Phantom$</span>

                    </div>

                    <ArrowDropDown className="dropdown-button" onClick={() => setMenuActice(!menuActive)} />

                    <ul className={`nav-dropdown-menu ${menuActive ? 'menu-active' : ''}`}>

                        <li className="dropdown-menu-item">

                            <Settings className="dropdown-item-icon" /> Settings

                        </li>

                        <li className="dropdown-menu-item">

                            <ExitToAppIcon className="dropdown-item-icon" /> Log Out

                        </li>

                    </ul>
                </div>


            </div>

        </div >
    )
}

export default Nav
