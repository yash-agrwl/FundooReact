import React from 'react'
import './TakeNoteThree.css'
import IconButton from '@mui/material/IconButton';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { toggleArchive } from '../../services/dataservice';

function TakeNoteThree(props) {

    const UpdateArchive = (id) => {
        console.log("noteid is: ", id)
        //let archive = {noteIdList: [id], isArchived: true}
        toggleArchive(id).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })
    }

    return (

        <div className="note3_inner-box">

            <CheckCircleRoundedIcon id='note3_select-note' />

            <div className="note3_content">

                <div className="note3_content_box1">

                    <div role="textbox" title='title' className='note3_title'>
                        {props.note.title}
                    </div>

                    <div className="note3_box1_pin-icon">

                        <IconButton id='note3_pin-note' aria-label="pin-note" size='small'>
                            <PushPinOutlinedIcon />
                        </IconButton>

                    </div>

                </div>

                <div role="textbox" title='body' className='note3_description'>
                    {props.note.body}
                </div>

            </div>

            <div className="note3_icon-group">

                <IconButton className='note3_icon-button' aria-label="New list" size='small'>
                    <AddAlertOutlinedIcon className='icon' />
                </IconButton>

                <IconButton className='note3_icon-button' aria-label="New list" size='small'>
                    <PersonAddAltOutlinedIcon className='icon' />
                </IconButton>

                <IconButton className='note3_icon-button' aria-label="New list" size='small'>
                    <ColorLensOutlinedIcon className='icon' />
                </IconButton>

                <IconButton className='note3_icon-button' aria-label="New list" size='small'>
                    <ImageOutlinedIcon className='icon' />
                </IconButton>

                <IconButton onClick={() => UpdateArchive(props.note.noteId)} className='note3_icon-button' aria-label="New list" size='small'>
                    <ArchiveOutlinedIcon className='icon' />
                </IconButton>

                <IconButton className='note3_icon-button' aria-label="New list" size='small'>
                    <MoreVertOutlinedIcon className='icon' />
                </IconButton>

            </div>

        </div>
    )
}

export default TakeNoteThree