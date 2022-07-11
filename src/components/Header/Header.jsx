import React from 'react';
import './header.css';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import ListView from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import keep from "../../assets/keep.png";
import profile from "../../assets/blank-profile-32px.png";

function Header() {
    return (
        <div className='outer-box'>
            <div className='inner-box'>

                <div className="box1">
                    <IconButton className='iconButton' aria-label="main-menu" size="large" sx={{margin: '0 4px'}}>
                        <MenuIcon />
                    </IconButton>
                    <div class="keep">
                        <img src={keep} alt="keep"/>
                        <span>Keep</span>
                    </div>
                </div>
                <div className="box2">
                    <form className='search-form' method="get" role="search">
                        <IconButton className='iconButton' aria-label="search" size="large" sx={{margin: '0 4px'}}>
                            <SearchIcon />
                        </IconButton>

                        <InputBase className='inputbase' placeholder="Search" type='text'/>

                        <IconButton className='iconButton' aria-label="clear-search" size="large" sx={{margin: '0 4px', visibility:"hidden"}}>
                            <ClearIcon />
                        </IconButton>
                    </form>
                    <div className="settings">
                        <IconButton className='iconButton' aria-label="clear-search" size="large">
                            <RefreshIcon />
                        </IconButton>
                        <IconButton className='iconButton' aria-label="clear-search" size="large">
                            <ListView />
                        </IconButton>
                        <IconButton className='iconButton' aria-label="clear-search" size="large">
                            <SettingsOutlinedIcon />
                        </IconButton>
                    </div>
                </div>
                

                <div className="box3">
                    <IconButton className='iconButton' aria-label="clear-search" size="large">
                        <AppsRoundedIcon />
                    </IconButton>
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default Header