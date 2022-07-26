import React from 'react';
import './TakeNoteTwo.css';
import ClickAwayListener from "@mui/base/ClickAwayListener";
import IconButton from '@mui/material/IconButton';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { createNotes } from '../../services/dataservice';
import ColorPopper from '../colorPoper/colorpoper';
import { TextareaAutosize } from '@mui/material';

function TakeNoteTwo(props) {

    const [CreateNoteObj, setCreateNoteObj] = React.useState({ title: "", body: "", archive: false, color: "" });

    const TakeTitle = (event) => {
        setCreateNoteObj((prevState) => ({ ...prevState, title: event.target.value }))
    }

    const TakeDescription = (event) => {
        setCreateNoteObj((prevState) => ({ ...prevState, body: event.target.value }))
    }

    const submit = () => {

        createNotes(CreateNoteObj).then((response) => {
            console.log(response);
            if (props.noteChoice === "Archive") {
                props.GetArchives()
            }
            else if(props.noteChoice === "Notes"){
                props.GetNotes()
            }
        }).catch((error) => {
            console.log(error)
        })

        props.listen()
    }

    const MakeArchive = () => {
        setCreateNoteObj((prevState) => ({ ...prevState, archive: true }))
    }

    const listenToColorPoper = (bgcolor) => {
        setCreateNoteObj((prevState) => ({ ...prevState, color: bgcolor }))
    }

    return (
        <div className='note2_outer-box'>

            <ClickAwayListener onClickAway={() => props.listen()}>

                <div className="note2_inner-box" style={{ backgroundColor: CreateNoteObj.color, borderColor: CreateNoteObj.color }}>

                    <div className="note2_box1">

                        <TextareaAutosize onChange={TakeTitle} className='note2_input' type='text' placeholder='Title'
                            style={{ backgroundColor: CreateNoteObj.color }} />

                        <div className="note2_box1_pin-icon">

                            <IconButton id='note2_pin-note' aria-label="pin-note" size='small'>
                                <PushPinOutlinedIcon />
                            </IconButton>

                        </div>

                    </div>

                    <div className="note2_box2">

                        <TextareaAutosize onChange={TakeDescription} className='note2_input' type="text" placeholder='Take a note...'
                            style={{ backgroundColor: CreateNoteObj.color }} height='44px' />

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

                            <ColorPopper action='create' listenToColorPoper={listenToColorPoper} />

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