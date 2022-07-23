import React from 'react';
import './TakeNoteOne.css';
import IconButton from '@mui/material/IconButton';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InputBase from '@mui/material/InputBase';
import { Tooltip } from '@mui/material';

function TakeNoteOne(props) {
    return (
        <div className='note1_outer-box'>

            <div className="note1_inner-box" onClick={() => props.listen()}>

                <InputBase className='note1_input-base' placeholder="Take a note..." fullWidth />

                <Tooltip title='New List'>
                    <IconButton aria-label="New list" size='large'>
                        <CheckBoxOutlinedIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title='New note with drawing'>
                    <IconButton aria-label="New note with drawing" size='large'>
                        <BrushIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title='New note with image'>
                    <IconButton aria-label="New note with image" size='large'>
                        <ImageOutlinedIcon />
                    </IconButton>
                </Tooltip>


            </div>

        </div>
    )
}

export default TakeNoteOne