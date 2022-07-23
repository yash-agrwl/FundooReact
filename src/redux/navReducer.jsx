const initialDrawerState = {

    title: "Keep",

};

export const NavReducer = (state = initialDrawerState, action) => {
    console.log(action)
    switch (action.type) {
        case 'Notes':
            return {
                ...state,
                title: "Keep"
            };
        case 'Reminders':
            return {
                ...state,
                title: "Reminders"
            };
        case 'Archive':
            return {
                ...state,
                title: "Archive"
            };
        case 'Edit':
            return {
                ...state,
                title: "Edit labels"
            };
        case 'Trash':
            return {
                ...state,
                title: "Trash"
            };
        default:
            return state;
    }
};