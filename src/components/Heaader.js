import React, { useState } from 'react'
import './header.css'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'
const Heaader = () => {

    const [search, setSearch] = useState("")
    return (
        <div className="header">

            <div className="header_left">
                <MenuSharpIcon />
                <Link to="/">
                    <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
                </Link>
            </div>
            <div className="header_center">
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="search" type="text" />
                <Link to={`/search/${search}`} >
                    <SearchIcon className="header_inputbtn" />
                </Link>
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header_right" />
                <AppsIcon className="header_right" />
                <NotificationsIcon className="header_right" />
                <AccountCircleIcon className="header_right" /></div>
        </div>
    )
}

export default Heaader
