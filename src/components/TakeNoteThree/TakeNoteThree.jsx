import React from 'react'
import './TakeNoteThree.css'
import IconButton from '@mui/material/IconButton';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { toggleArchive, updateNotes } from '../../services/dataservice';
import ColorPopper from '../colorPoper/colorpoper';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/material';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import './EditNotesModal.css'


function TakeNoteThree(props) {

    const [open, setOpen] = React.useState(false);
    const [editObj, setEditObj] = React.useState({});

    const handleOpen = (note) => {
        setOpen(true);
        setEditObj(note)
    }

    const handleClose = () => setOpen(false);

    const UpdateArchive = (id) => {
        console.log("noteid is: ", id)
        //let archive = {noteIdList: [id], isArchived: true}
        toggleArchive(id).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })
    }

    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'background.paper',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    // };

    const changeTitle = (event) => {
        setEditObj((prevState) => ({ ...prevState, title: event.target.value }))
    }

    const changeBody = (event) => {
        setEditObj((prevState) => ({ ...prevState, body: event.target.value }))
    }

    const submit = () => {
        console.log(editObj)
        updateNotes(editObj).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })

        handleClose()
    }

    return (

        <div className="note3_inner-box" style={{ backgroundColor: props.note.color, borderColor: props.note.color }}>

            <CheckCircleRoundedIcon id='note3_select-note' />

            <div className="note3_content" onClick={() => handleOpen(props.note)}>

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

                <ColorPopper action='update' id={props.note.noteId} />

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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal_inner-box' style={{ backgroundColor: props.note.color, borderColor: props.note.color }}>

                    <div className="modal_box1">

                        <TextareaAutosize onChange={changeTitle} className='modal_input' id='modal_title' type='text' defaultValue={editObj.title}
                            placeholder='Title' style={{ backgroundColor: props.note.color }} />

                        <div className="modal_box1_pin-icon">

                            <IconButton id='modal_pin-note' aria-label="pin-note" size='small'>
                                <PushPinOutlinedIcon />
                            </IconButton>

                        </div>

                    </div>

                    <div className="modal_box2">

                        <TextareaAutosize onChange={changeBody} className='modal_input' id='modal_body' type="text" defaultValue={editObj.body}
                            placeholder='Take a note...' style={{ backgroundColor: props.note.color }}/>

                    </div>

                    <div className="modal_box3">

                        <button onClick={submit} type='submit' className='modal_closeButton'>Close</button>

                        <div className="modal_icon-group">

                            <IconButton className='modal_icon-button' aria-label="New list" size='small'>
                                <AddAlertOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='modal_icon-button' aria-label="New list" size='small'>
                                <PersonAddAltOutlinedIcon className='icon' />
                            </IconButton>

                            <ColorPopper action='update' id={props.note.noteId} />

                            <IconButton className='modal_icon-button' aria-label="New list" size='small'>
                                <ImageOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton onClick={() => UpdateArchive(props.note.noteId)} className='modal_icon-button' aria-label="New list" size='small'>
                                <ArchiveOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='modal_icon-button' aria-label="New list" size='small'>
                                <MoreVertOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='modal_icon-button' aria-label="New list" size='small' disabled>
                                <UndoOutlinedIcon className='icon' />
                            </IconButton>

                            <IconButton className='modal_icon-button' aria-label="New list" size='small' disabled>
                                <RedoOutlinedIcon className='icon' />
                            </IconButton>

                        </div>

                    </div>

                </Box>

            </Modal>

        </div>
    )
}

export default TakeNoteThree