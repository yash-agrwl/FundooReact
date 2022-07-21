import axios from "axios"

const headerConfig = {
    headers: {
        //Authorization: 'D0RTtmC5q5fqUuyIfkarWF1N2PRRUbE1NfCUNdHul2pGPgfU0Z5oOm22NIVatAsh'
        Authorization: "Bearer " + localStorage.getItem('token')
        //Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwibmJmIjoxNjU3OTY2NjI0LCJleHAiOjE2NTc5Njg0MjQsImlhdCI6MTY1Nzk2NjYyNH0.SK-5WD0uIUlh4hfLjjVdo1c5VwasqXE4XjvX-cQBItU'
    }
}

export const getNotes = () => {
    console.log(headerConfig)
    let response = axios.get("https://localhost:44349/api/Note/GetNotes", headerConfig)
    //let response = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList", headerConfig)
    return response
}

export const createNotes = (createNoteObj) => {
    let response = axios.post("https://localhost:44349/api/Note/Create", createNoteObj, headerConfig)
    return response
}

export const toggleArchive = (id) => {
    let response = axios.patch(`https://localhost:44349/api/Note/ToggleArchive/${id}`, id, headerConfig)
    return response
}

export const setColor = (noteColorObj) => {
    console.log(noteColorObj)
    let response = axios.patch(
        `https://localhost:44349/api/Note/SetColor?noteId=${noteColorObj.noteId}&noteColor=${encodeURIComponent(noteColorObj.noteColor)}`,
        null, headerConfig)
    return response
}

export const updateNotes = (createNoteObj) => {
    let response = axios.patch("https://localhost:44349/api/Note/Edit", createNoteObj, headerConfig)
    return response
}