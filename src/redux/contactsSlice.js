import { createSlice, nanoid } from "@reduxjs/toolkit";
import contacts from "../components/contacts.json"

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: contacts
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload)
            
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        id: nanoid(),
                        name, number
                    },
                };
            },
        
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
        
    }
    },
})
export const { addContact, deleteContact } = contactsSlice.actions;
 export const contactsReducer = contactsSlice.reducer;