import React, { useState } from 'react'
import './Dashboard.css'
import Header from '../../components/Header/Header';
import TakeNoteOne from '../../components/TakeNoteOne/TakeNoteOne';
import TakeNoteThree from '../../components/TakeNoteThree/TakeNoteThree';
import TakeNoteTwo from '../../components/TakeNoteTwo/TakeNoteTwo';
import { getNotes } from '../../services/dataservice';
import { getArchive } from "../../services/dataservice";
import { getReminders } from "../../services/dataservice";
import { getTrash } from "../../services/dataservice";
import Drawer1 from '../../components/drawer/Drawer';

function Dashboard() {

    const [notes, setNotes] = useState([])
    const [view, setView] = React.useState(true);
    const [drawerObj, setDrawerObj] = React.useState(false)
    const [noteChoice, setNoteChoice] = React.useState("Notes")

    const GetNotes = () => {
        getNotes().then((response) => {
            console.log(response);
            setNotes(response.data.data)
            // fil = response.data.data.filter((note) => {
            //     if (note.archive === false && note.trash === false)
            //         return note;
            // })
            // console.log(fil)
            // setNotes(fil)
        }).catch((error) => {
            console.log(error)
            setNotes([])
        })
    }

    const GetArchives = () => {
        getArchive().then((response) => {
            console.log(response);
            setNotes(response.data.data)
        }).catch((error) => {
            console.log(error)
            setNotes([])
        })
    }

    const GetSelectiveNotes = () => {

        let fil = [];

        if (noteChoice === "Notes") {
            GetNotes()
        }
        else if (noteChoice === "Archive") {
            GetArchives()
        }
        else if (noteChoice === "Reminders") {
            getReminders().then((response) => {
                console.log(response.data.data);
                setNotes(response.data.data)
            }).catch((error) => {
                console.log(error)
                setNotes([])
            })
        }
        else if (noteChoice === "Trash") {
            getTrash().then((response) => {
                console.log(response);
                setNotes(response.data.data)
            }).catch((error) => {
                console.log(error)
                setNotes([])
            })
        }

    }

    React.useEffect(() => {
        GetSelectiveNotes()
    }, [noteChoice])

    const viewone = (view) => {
        return (
            <>
                {view ? (
                    <TakeNoteOne listen={() => setView(!view)} />
                ) : (
                    <TakeNoteTwo listen={() => setView(!view)} GetNotes={GetNotes} GetArchives={GetArchives} noteChoice={noteChoice} />
                )}
            </>
        );
    };

    const listenToNav = (noteType) => {
        setNoteChoice(noteType)
    }

    const listenToHeader = () => {
        setDrawerObj(!drawerObj)
    }

    return (
        <div>
            <Header listenToHeader={listenToHeader} />

            <div>
                <Drawer1 drawerObj={drawerObj} listenToNav={listenToNav} />

                <div>
                    {viewone(view)}

                    <div className="note3_container">

                        {notes.map((note) => (<TakeNoteThree key={note.noteId} note={note} GetNotes={GetNotes} GetArchives={GetArchives} noteChoice={noteChoice} />))}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard