import React from 'react';
import './TakeNoteOne.css';
import IconButton from '@mui/material/IconButton';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InputBase from '@mui/material/InputBase';

function TakeNoteOne(props) {
    return (
        <div className='note1_outer-box'>

            <div className="note1_inner-box" onClick={() => props.listen()}>

                <InputBase className='note1_input-base' placeholder="Take a note..." fullWidth/>

                <IconButton aria-label="New list" size='large'>
                    <CheckBoxOutlinedIcon />
                </IconButton>

                <IconButton aria-label="New note with drawing" size='large'>
                    <BrushIcon />
                </IconButton>

                <IconButton aria-label="New note with image" size='large'>
                    <ImageOutlinedIcon />
                </IconButton>

            </div>

        </div>
    )
}

export default TakeNoteOne