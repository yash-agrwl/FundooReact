import React, { useState } from 'react'
import './Dashboard.css'
import Header from '../../components/Header/Header';
import TakeNoteOne from '../../components/TakeNoteOne/TakeNoteOne';
import TakeNoteThree from '../../components/TakeNoteThree/TakeNoteThree';
import TakeNoteTwo from '../../components/TakeNoteTwo/TakeNoteTwo';
import { getNotes } from '../../services/dataservice';

function Dashboard() {

    const [notes, setNotes] = useState([])
    const [view, setView] = React.useState(true);

    React.useEffect(() => {
        getNotes().then((response) => {
            console.log(response);
            setNotes(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const viewone = (view) => {
        return (
            <>
                {view ? (
                    <TakeNoteOne listen={() => setView(!view)} />
                ) : (
                    <TakeNoteTwo listen={() => setView(!view)} />
                )}
            </>
        );
    };

    return (
        <div>
            <Header />
            
            {viewone(view)}

            <div className="note3_container">

                {notes.map((note) => (<TakeNoteThree key={note.id} note={note} />))}

            </div>

        </div>
    )
}

export default Dashboard