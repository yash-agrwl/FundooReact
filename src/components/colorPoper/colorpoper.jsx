import * as React from 'react';
import ClickAwayListener from "@mui/base/ClickAwayListener";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import IconButton from '@mui/material/IconButton';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { setColor } from '../../services/dataservice';
import './colorpoper.css'
import { Tooltip } from '@mui/material';

export default function ColorPopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const colors = ["#fff", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb",
        "#fdcfe8", "#e6c9a8", "#e8eaed"]
    //const colors = ["red", "blue", "yellow"]

    const open = Boolean(anchorEl);
    const id = open ? ((props.action === 'create') ? 'simple-popper' : 'simple-popper1') : undefined;

    const pickColor = (color) => {
        console.log(color, props.action)

        if (props.action === 'create') {
            props.listenToColorPoper(color)
        }
        else if (props.action === 'update') {

            let noteColorObj = { noteId: props.id, noteColor: color }

            setColor(noteColorObj).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div>

            <Tooltip title='Background options'>
                <IconButton onClick={handleClick} className='note3_icon-button' aria-label="New list" size='small'>
                    <ColorLensOutlinedIcon className='icon' />
                </IconButton>
            </Tooltip>

            <ClickAwayListener>

                <Popper id={id} open={open} anchorEl={anchorEl}>

                    <Box className='colorpoper_box' sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>

                        {colors.map((color) =>
                            <div className='colorpoper_color-list' style={{ backgroundColor: color }} onClick={() => pickColor(color)} />
                        )}

                    </Box>

                </Popper>

            </ClickAwayListener>

        </div>
    );
}
