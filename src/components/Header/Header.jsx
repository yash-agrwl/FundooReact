import React from 'react';
import './Header.css';
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
import { connect } from 'react-redux';

function Header(props) {
    return (
        <div className='header_outer-box'>

            <div className='header_inner-box'>

                <div className="header_box1">

                    <IconButton className='header_icon-button' id='menu' aria-label="main-menu" size="large" onClick={props.listenToHeader}>
                        <MenuIcon />
                    </IconButton>

                    <div class="header_box1_heading">

                        <img src={keep} alt="keep" />

                        <span>{props.title}</span>

                    </div>

                </div>

                <div className="header_box2">

                    <form className='header_box2_search-form' method="get" role="search">

                        <IconButton className='header_icon-button' id='search' aria-label="search" size="large">
                            <SearchIcon />
                        </IconButton>

                        <InputBase className='header_input-base' id='search-input' placeholder="Search" type='text' />

                        <IconButton className='header_icon-button' id='clear' aria-label="clear-search" size="large">
                            <ClearIcon />
                        </IconButton>

                    </form>

                    <div className="header_icon-group">

                        <IconButton className='header_icon-button' id='refresh' aria-label="refresh" size="large">
                            <RefreshIcon />
                        </IconButton>

                        <IconButton className='header_icon-button' id="list-view" aria-label="list-view" size="large">
                            <ListView />
                        </IconButton>

                        <IconButton className='header_icon-button' id='setting' aria-label="setting" size="large">
                            <SettingsOutlinedIcon />
                        </IconButton>

                    </div>

                </div>


                <div className="header_box3">

                    <IconButton className='header_icon-button' id='app' aria-label="app" size="large">
                        <AppsRoundedIcon />
                    </IconButton>

                    <IconButton className='header_icon-button' aria-label="app" size="small">
                        <img src={profile} alt="profile" />
                    </IconButton>

                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        title: state.navReducer.title,
    };
};

export default connect(mapStateToProps)(Header)