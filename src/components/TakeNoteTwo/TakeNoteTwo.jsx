import React from 'react';
import './TakeNoteTwo.css';
import ClickAwayListener from "@mui/base/ClickAwayListener";
import IconButton from '@mui/material/IconButton';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { createNotes } from '../../services/dataservice';

function TakeNoteTwo(props) {

    const [CreateNoteObj, setCreateNoteObj] = React.useState({ title: "", body: "", archive: false });

    const TakeTitle = (event) => {
        setCreateNoteObj((prevState) => ({ ...prevState, title: event.target.value }))
    }

    const TakeDescription = (event) => {
        setCreateNoteObj((prevState) => ({ ...prevState, body: event.target.value }))
    }

    const submit = () => {

        createNotes(CreateNoteObj).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })

        props.listen()
    }

    const MakeArchive = () => {
        setCreateNoteObj((prevState) => ({ ...prevState, archive: true }))
    }

    return (
        <div className='note2_outer-box'>

            <ClickAwayListener onClickAway={() => props.listen()}>

                <div className="note2_inner-box">

                    <div className="note2_box1">

                        <input onChange={TakeTitle} className='note2_input' type='text' placeholder='Title' />

                        <div className="note2_box1_pin-icon">

                            <IconButton id='note2_pin-note' aria-label="pin-note" size='small'>
                                <PushPinOutlinedIcon />
                            </IconButton>

                        </div>

                    </div>

                    <div className="note2_box2">

                        <input onChange={TakeDescription} className='note2_input' type="text" placeholder='Take a note...' />

                    </div>

                    <div className="note2_box3">

                        <button onClick={submit} type='submit' className='closeButton'>Close</button>

                        <div className="note2_icon-group">

                            <IconButton className='note2_icon-button' aria-label="New list" size='small'>
                                <AddAlertOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='note2_icon-button' aria-label="New list" size='small'>
                                <PersonAddAltOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='note2_icon-button' aria-label="New list" size='small'>
                                <ColorLensOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='note2_icon-button' aria-label="New list" size='small'>
                                <ImageOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton onClick={MakeArchive} className='note2_icon-button' aria-label="New list" size='small'>
                                <ArchiveOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='note2_icon-button' aria-label="New list" size='small'>
                                <MoreVertOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='note2_icon-button' aria-label="New list" size='small' disabled>
                                <UndoOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='note2_icon-button' aria-label="New list" size='small' disabled>
                                <RedoOutlinedIcon className='icon' />
                            </IconButton>

                        </div>

                    </div>

                </div>

            </ClickAwayListener>

        </div>
    )
}

export default TakeNoteTwo;