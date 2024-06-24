import { createSlice, } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./contactsOps.js";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(addContact.pending, (state) => {
            state.loading = true;
            
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
            })
        
    }
    
})
export const {  deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
 


// reducers: {
//         addContact: {
//             reducer(state, action) {
//                 state.items.push(action.payload)
            
//             },
//             prepare({ name, number }) {
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         name, number
//                     },
//                 };
//             },
        
//         },
//         deleteContact(state, action) {
//             const index = state.items.findIndex(task => task.id === action.payload);
//       state.items.splice(index, 1);
        
//     }
//     },